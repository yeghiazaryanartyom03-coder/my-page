import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { CartItem, ServerItem, ShippingMethod } from "../../types";

const generateCartId = (): string => {
  return `cart_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

const CART_ID_KEY = "cart_id";
const CART_DATA_KEY = "cart_data";

const getOrCreateCartId = (): string => {
  let cartId = localStorage.getItem(CART_ID_KEY);
  if (!cartId) {
    cartId = generateCartId();
    localStorage.setItem(CART_ID_KEY, cartId);
  }
  return cartId;
};

const loadLocalCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_DATA_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return parsed.items || [];
  } catch {
    return [];
  }
};

const saveLocalCart = (items: CartItem[]): void => {
  localStorage.setItem(
    CART_DATA_KEY,
    JSON.stringify({ items, timestamp: Date.now() }),
  );
};

interface CartState {
  cartId: string | null;
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cartId: null,
  items: [],
  loading: false,
  error: null,
};

export const initializeCart = createAsyncThunk<
  { cartId: string; items: CartItem[] },
  void,
  { rejectValue: string }
>("cart/initializeCart", async (_, { rejectWithValue }) => {
  try {
    const cartId = getOrCreateCartId();

    const localItems = loadLocalCart();

    try {
      const response = await axios.get(
        `http://localhost:5000/api/cart/${cartId}`,
      );
      if (response.data.success && response.data.items?.length > 0) {
        const serverItems: CartItem[] = response.data.items
          .filter((item: ServerItem | null) => item && item?.id)
          .map((item: ServerItem) => ({
            itemId: String(item.id),
            quantity: item.quantity ?? 1,
            shippingMethod: item.shippingMethod || "standart",
          }));

        return { cartId, items: serverItems };
      }
    } catch (error) {
      console.log(error);
    }
    return { cartId, items: localItems };
  } catch (error) {
    console.log(error);
    return rejectWithValue("error: cart init");
  }
});

export const addToCart = createAsyncThunk<
  CartItem[],
  { productId: string; quantity: number },
  { state: { cart: CartState }; rejectValue: string }
>(
  "cart/AddToCart",
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    const { cartId, items } = getState().cart;

    if (!cartId) {
      return rejectWithValue("Корзина не инициализирована");
    }

    const existingIndex = items.findIndex((item) => item.itemId === productId);
    let newItems: CartItem[];

    if (existingIndex >= 0) {
      newItems = items.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    } else {
      newItems = [...items, { itemId: productId, quantity , shippingMethod: 'standard'}];
    }

    saveLocalCart(newItems);

    try {
      await axios.post(`http://localhost:5000/api/cart/add`, {
        cartId,
        items: newItems.map((item) => ({
          itemId: item.itemId,
          quantity: item.quantity,
        })),
      });
    } catch (error) {
      console.error("Ошибка при сохранении корзины на сервере:", error);
    }

    return newItems;
  },
);


export const updateCartItemQuantity = createAsyncThunk<
  { itemId: string; quantity: number }, // возвращаем обновлённые данные для редьюсера
  { itemId: string; quantity: number },
  { state: { cart: CartState }; rejectValue: string }
>('cart/updateQuantity', async ({ itemId, quantity }, { getState, rejectWithValue }) => {
  const { cartId, items } = getState().cart;

  if (!cartId) {
    return rejectWithValue('Корзина не инициализирована');
  }

  const previousItems = [...items];

  const newItems = items.map(item =>
    item.itemId === itemId ? { ...item, quantity } : item
  );
  saveLocalCart(newItems);

  try {
    await axios.patch(`http://localhost:5000/api/cart/${cartId}/item/${itemId}`, { quantity });
    return { itemId, quantity }; 
  } catch (error) {
    saveLocalCart(previousItems);
    console.error('Ошибка обновления количества:', error);
    return rejectWithValue('Не удалось обновить количество');
  }
});

export const updateCartItemShipping = createAsyncThunk<
  { itemId: string; shippingMethod: ShippingMethod },
  { itemId: string; shippingMethod: ShippingMethod },
  { state: { cart: CartState }; rejectValue: string }
>('cart/updateShipping', async ({ itemId, shippingMethod }, { getState, rejectWithValue }) => {
  const { cartId, items } = getState().cart;

  if (!cartId) {
    return rejectWithValue('Корзина не инициализирована');
  }

  const previousItems = [...items];
  const newItems = items.map(item =>
    item.itemId === itemId ? { ...item, shippingMethod } : item
  );
  saveLocalCart(newItems);

  try {
    await axios.patch(`http://localhost:5000/api/cart/${cartId}/item/${itemId}`, { shippingMethod });
    return { itemId, shippingMethod };
  } catch (error) {
    saveLocalCart(previousItems);
    console.error('Ошибка обновления способа доставки:', error);
    return rejectWithValue('Не удалось обновить способ доставки');
  }
});


export const removeCartItem = createAsyncThunk<
  string, 
  string, 
  { state: { cart: CartState }; rejectValue: string }
>('cart/removeItem', async (itemId, { getState, rejectWithValue }) => {
  const { cartId, items } = getState().cart;

  if (!cartId) {
    return rejectWithValue('Корзина не инициализирована');
  }

  const previousItems = [...items];
  const newItems = items.filter(item => item.itemId !== itemId);
  saveLocalCart(newItems);

  try {
    await axios.delete(`http://localhost:5000/api/cart/remove`,{
      data: {cartId, itemId}
    });
    return itemId;
  } catch (error) {
    saveLocalCart(previousItems);
    console.error('Ошибка удаления товара:', error);
    return rejectWithValue('Не удалось удалить товар');
  }
});


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      saveLocalCart([]);
    },
  },
  extraReducers: (builder) => {
    builder
      // ---------- initializeCart
      .addCase(initializeCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        initializeCart.fulfilled,
        (
          state,
          action: PayloadAction<{ cartId: string; items: CartItem[] }>,
        ) => {
          state.loading = false;
          state.cartId = action.payload.cartId;
          state.items = action.payload.items;
        },
      )
      .addCase(initializeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Ошибка инициализации корзины";
      })

      // ---------- addToCart ----------
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addToCart.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.loading = false;
          state.items = action.payload;
        },
      )
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Ошибка добавления товара";
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
        const item = state.items.find(i => i.itemId === action.payload.itemId);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.error = action.payload ?? 'Ошибка обновления количества';
      })

      // ---------- updateShipping ----------
      .addCase(updateCartItemShipping.fulfilled, (state, action: PayloadAction<{ itemId: string; shippingMethod: ShippingMethod }>) => {
        const item = state.items.find(i => i.itemId === action.payload.itemId);
        if (item) {
          item.shippingMethod = action.payload.shippingMethod;
        }
      })
      .addCase(updateCartItemShipping.rejected, (state, action) => {
        state.error = action.payload ?? 'Ошибка обновления доставки';
      })

      // ---------- removeItem ----------
      .addCase(removeCartItem.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(item => item.itemId !== action.payload);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.error = action.payload ?? 'Ошибка удаления товара';
      });;
  },
});

export const { clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
