import { useSearchParams } from "react-router";
import { ShopHeader } from "./ShopHomePage/shopComponents/ShopHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ServerItem } from "./ShopHomePage";
import { CheckoutItem } from "./CheckoutItem";

type ShippingMethod = 'standard' | 'express' | 'free';

const shippingCosts: Record<ShippingMethod, number> = {
  standard: 5,   // $5
  express: 10,   // $10
  free: 0,       // $0
};

export function ShopCart() {
  const [searchParams] = useSearchParams();
  const cartId = searchParams.get("cartId");
  const [cartItems,setCartItems] = useState<ServerItem[]>()
  const [shippingSelections,setShippingSelections] = useState<Record<string,ShippingMethod>>({})

  useEffect(() => {
    const cartFetch = async () => {
      
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cart/${cartId}`);
        setCartItems(response.data.items)

         const initialShipping: Record<string, ShippingMethod> = {};
      response.data.items.forEach((item: ServerItem) => {
        initialShipping[item.id] = item.shippingMethod || 'standard';
      });
      setShippingSelections(initialShipping);
        
      } catch (error) {
        console.log(error);
      }
    };
    if (cartId) {
      cartFetch();    
      }
    
  }, [cartId]);

  const handleShippingChange = async (itemId: string, method: ShippingMethod) => {
    // Оптимистично обновляем UI
    setShippingSelections(prev => ({ ...prev, [itemId]: method }));

    // Отправляем запрос на сервер
    try {
      await axios.patch(`http://localhost:5000/api/cart/${cartId}/item/${itemId}`, {
        shippingMethod: method,
      });
    } catch (error) {
      console.error('Ошибка обновления доставки:', error);
      // В случае ошибки можно вернуть предыдущее значение
      setShippingSelections(prev => ({ ...prev, [itemId]: prev[itemId] }));
    }
  };

  const handleQuantityChange = async (itemId:string, newQuantity:number) =>{
    
    const previousItems = cartItems

    setCartItems(prev =>
      prev.map(item => item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
  );

    try{
      await axios.patch(`http://localhost:5000/api/cart/${cartId}/item/${itemId}`, {
        quantity: newQuantity,
      });
    }catch(error){
      console.log(error)

      setCartItems(previousItems)
    }
  }

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev?.filter(item => item.id !== itemId));
  };

  if (!cartId) {
    return <div>Cart ID is missing</div>;
  }
  
  return (
    <>
      <ShopHeader cartId={cartId} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-white">Checkout</h1>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* ---------- ТОВАРЫ ---------- */}
          <div className="lg:col-span-2 space-y-4">
            {/* Товар vse */}
          {cartItems===undefined || cartItems.map((cartItem)=>{
            
            return <CheckoutItem key={cartItem.id} 
                                 cartItem={cartItem} 
                                 cartId={cartId} 
                                 onRemove={handleRemoveItem} 
                                 onShippingChange={handleShippingChange} 
                                 selectedShipping={shippingSelections[cartItem.id] || 'standard'}
                                 onQuantityChange={handleQuantityChange}/>
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
                  <span>Subtotal (3 items)</span>
                  <span className="text-white font-medium">$360</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white font-medium">$25</span>
                </div>
              </div>

              <div className="border-t border-white/10 my-6"></div>

              <div className="flex justify-between font-bold text-xl text-white">
                <span>Total</span>
                <span className="text-[#A50044]">$385</span>
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
