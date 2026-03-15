import { useSearchParams } from "react-router";
import { ShopHeader } from "./ShopHomePage/shopComponents/ShopHeader";
import { useEffect } from "react";
import type { ServerItem } from "./ShopHomePage";
import { CheckoutItem } from "./CheckoutItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { initializeCart, removeCartItem, updateCartItemQuantity, updateCartItemShipping } from "../../store/slice/cartSlice";
import { fetchItems } from "../../store/slice/itemSlice";
import { type ShippingMethod } from "../../types";
import { useSelector } from "react-redux";
import { selectShippingTotal, selectSubtotal, selectTotal, selectTotalQuantity } from "../../store/selectors/cartSelectors";

export function ShopCart() {
  const [searchParams] = useSearchParams();
  const cartId = searchParams.get("cartId");
  const subtotal = useSelector(selectSubtotal)
  const shippingTotal = useSelector(selectShippingTotal)
  const total = useSelector(selectTotal)
  const totalQuantity = useSelector(selectTotalQuantity)
  const dispatch = useAppDispatch()
  const {error, items: cartItems} = useAppSelector((state)=> state.cart)
  const {error: productError, items: products, loading: productLoading} = useAppSelector((state) => state.items)

  useEffect(() => {
    if(cartItems.length === 0){
      dispatch(initializeCart())
    }
    if(products.length === 0){
      dispatch(fetchItems())
    }
    
  }, [dispatch, cartItems.length, products.length]);

  const itemsToShow: ServerItem[] = cartItems
  .map(cartItem => {
    const product = products.find(p => p.id === cartItem.itemId);
    if (!product) return null;
    return {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      review: product.review,
      quantity: cartItem.quantity,
      shippingMethod: cartItem.shippingMethod,
    };
  })
  .filter((item): item is ServerItem => item !== null);

  const handleShippingChange = (itemId: string, method: ShippingMethod) => {
    dispatch(updateCartItemShipping({itemId, shippingMethod: method}))
  };

  const handleQuantityChange = async (itemId:string, newQuantity:number) =>{
    dispatch(updateCartItemQuantity({ itemId, quantity: newQuantity}))
  }

  const handleRemoveItem = (itemId: string) => {
   dispatch(removeCartItem(itemId));
  };

  if (!cartId) {
    return <div>Cart ID is missing</div>;
  }

  if (productLoading) return <div>cart loading...</div>;
  if (error) return <div>error: {error}</div>;
  if(productError) return <div> error: {productError}</div>
  
  return (
    <>
      <ShopHeader cartId={cartId} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-white">Checkout</h1>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* ---------- ТОВАРЫ ---------- */}
          <div className="lg:col-span-2 space-y-4">
            {/* Товар vse */}
          {itemsToShow===undefined || itemsToShow.map((cartItem)=>{
            
            return <CheckoutItem key={cartItem.id} 
                                 cartItem={cartItem} 
                                 cartId={cartId} 
                                 onRemove={handleRemoveItem} 
                                 onShippingChange={handleShippingChange} 
                                 selectedShipping={cartItem.shippingMethod}
                                 onQuantityChange={handleQuantityChange}
                                 />
          })}
        </div>

          {/* ---------- ИТОГ ---------- */}
          <div className="lg:sticky lg:top-10 h-fit">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6 text-white">
                Order Summary
              </h2>

              <div className="space-y-4 text-neutral-300">
                <div className="flex justify-between">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span className="text-white font-medium">${subtotal/100}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white font-medium">${(shippingTotal/100).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              <div className="flex justify-between font-bold text-xl text-white">
                <span>Total</span>
                <span className="text-[#A50044]">${(total/100).toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="w-full mt-8 py-3 rounded-xl font-semibold text-white
                   bg-[#004D98] hover:bg-[#003b73]
                   active:scale-95 transition
                   focus:outline-none focus:ring-2 focus:ring-[#004D98] cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
