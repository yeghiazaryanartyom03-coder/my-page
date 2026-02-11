import { ShopHeader } from "./ShopHomePage/shopComponents/ShopHeader";
import { useEffect, useState } from "react";
import axios from "axios";

interface CounterProps {
  min?: number;
  max?: number;
  onAddToCart?: (quantity: number) => void;
}

interface Iitem {
  id: string;
  image: string;
  title: string;
  price: number;
  review: {
    stars: number;
    reviews: number;
  };
}

export interface ServerItem extends Iitem {
  quantity: number;
}

interface CartItem {
  itemId: string;
  quantity: number;
}

const CART_ID_KEY = "cart_id";
const CART_DATA_KEY = "cart_data";
const API_URL = "http://localhost:5000/api";

const generateCartId = (): string => {
  return `cart_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

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
    JSON.stringify({
      items,
      timestamp: Date.now(),
    }),
  );
};

const saveCartToServer = async (
  cartId: string,
  items: CartItem[],
): Promise<void> => {
  try {
    const itemsForServer = items.map((item) => ({
      itemId: item.itemId, // убеждаемся, что это строка
      quantity: item.quantity,
    }));

    console.log("Отправляю на сервер:", {
      cartId,
      items: itemsForServer,
    });

    const response = await axios.post(`${API_URL}/cart/add`, {
      cartId,
      items: itemsForServer,
    });

    console.log("✅ Корзина сохранена на сервере:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("❌ Ошибка сохранения корзины:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        cartId,
        sentItems: items,
      });
    } else if (error instanceof Error) {
      console.error("❌ Unexpected error:", error.message);
    } else {
      console.error("❌ Unknown error:", error);
    }
  }
};

const Counter: React.FC<CounterProps> = ({
  min = 1,
  max = 10,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(min);

  const increase = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(quantity);
      setQuantity(min);
    }
  };

  return (
    <>
      <div className="all-buttons flex flex-col items-center ">
        <div className="plus-minus-div flex items-center gap-1">
          <button
            className="border-none bg-white text-[34px] cursor-pointer"
            onClick={decrease}
          >
            -
          </button>
          <div className="text-3xl">{quantity}</div>
          <button
            className="border-none bg-white text-[34px] cursor-pointer"
            onClick={increase}
          >
            +
          </button>
        </div>
        <div className="add-buttom-div">
          <button
            onClick={handleAddToCart}
            className="bg-[rgb(10,15,45)] text-xl font-semibold px-22.5 py-2.5 rounded-2xl mb-1.25 cursor-pointer text-white"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export function ShopHomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState<string>("");
  const [products, setProducts] = useState<Iitem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const initializeCart = async () => {
      setIsLoading(true);

      // 1. Получаем или создаем cartId
      const id = getOrCreateCartId();
      setCartId(id);

      // 2. Загружаем из LocalStorage (мгновенно)
      const localCart = loadLocalCart();
      setCart(localCart);

      // 3. Пробуем загрузить с сервера
      try {
        const response = await axios.get(`${API_URL}/cart/${id}`);

        if (response.data.success && response.data.items?.length > 0) {
          // ПРЕОБРАЗУЕМ данные с сервера в формат CartItem[]
          const serverItems: CartItem[] = (response.data.items as ServerItem[])
            .filter((item) => item && item.id) // фильтруем null
            .map((item) => ({
              itemId: String(item.id), // преобразуем в строку и используем правильное поле
              quantity: item.quantity ?? 1,
            }));

          console.log("Загружено с сервера:", serverItems);

          // Объединяем с локальной корзиной (или заменяем)
          setCart(serverItems);
          saveLocalCart(serverItems);
          console.log("✅ Загружена корзина с сервера");
        } else {
          console.log("Сервер вернул пустую корзину");
        }
      } catch (error) {
        console.log("⚠️ Не удалось загрузить корзину с сервера", error);
      }

      setIsLoading(false);
    };

    initializeCart();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/items`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (
    productId: string,
    quantity: number,
    productTitle: string,
  ) => {
    console.log(`Adding ${quantity} of product ${productId} to cart`);

    if (!cartId) {
      const newCartId = getOrCreateCartId();
      setCartId(newCartId);
    }

    const currentCartId = cartId || getOrCreateCartId();

    // 1. Обновляем локальное состояние
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex(
      (item) => item.itemId === productId,
    );

    if (existingItemIndex >= 0) {
      // Увеличиваем количество существующего товара
      newCart[existingItemIndex].quantity += quantity;
    } else {
      // Добавляем новый товар
      newCart.push({ itemId: productId, quantity });
    }

    setCart(newCart);

    // 2. Сохраняем в LocalStorage
    saveLocalCart(newCart);

    // 3. Сохраняем на сервере (в фоне)
    saveCartToServer(currentCartId, newCart);

    // 4. Показываем уведомление
    alert(`✅ Добавлено ${quantity}x "${productTitle}" в корзину!`);

    // 5. Обновляем счетчик корзины в заголовке
    //updateCartHeader();
  };

  return (
    <>
      <ShopHeader cartId= {cartId}/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-1.25 mt-25">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="bg-white rounded-3xl flex flex-col items-center"
              >
                <div className="item-img-div">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="lg:w-81.75  w-100 h-100 rounded-tl-3xl rounded-tr-3xl object-cover"
                  />
                </div>
                <div className="item-information ml-1.25 text-[19px] font-medium self-start flex flex-col gap-2.5">
                  <div className="item-name">{product.title}</div>
                  <div className="item-price">
                    ${(product.price / 100).toFixed(2)}
                  </div>
                  <div className="item-revew">
                    <div className="item-stars">
                      <div className="flex items-center">
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            position: "relative",
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            style={{ position: "absolute", top: 0, left: 0 }}
                            fill="#ddd"
                          >
                            <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-3.5L6 22l1.5-8L2 9.5 9 9z" />
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            width="40"
                            height="40"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              fill: "rgb(10, 15, 45)",
                              clipPath: `inset(${100 - 8 * product.review.stars}% 0 0 0)`,
                            }}
                          >
                            <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-3.5L6 22l1.5-8L2 9.5 9 9z" />
                          </svg>
                        </div>
                        <div className="number-rating">
                          {product.review.stars} rating
                          <div className="revew-quantity">
                            {product.review.reviews} reviews
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.25 justify-center">
                  <Counter
                    min={1}
                    max={10}
                    onAddToCart={(quantity) => {
                      handleAddToCart(product.id, quantity, product.title);
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
