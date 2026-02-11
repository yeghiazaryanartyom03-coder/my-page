import { useSearchParams } from "react-router";
import { ShopHeader } from "./ShopHomePage/shopComponents/ShopHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ServerItem } from "./ShopHomePage";

export function ShopCart() {
  const [searchParams] = useSearchParams();
  const cartId = searchParams.get("cartId");
  const [cartItems,setCartItems] = useState<{success: boolean, items:ServerItem[]}>()

  useEffect(() => {
    const cartFetch = async () => {
      
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cart/${cartId}`);
        setCartItems(response.data)
        
      } catch (error) {
        console.log(error);
      }
    };
    if (cartId) {
      cartFetch();    
      }
    
  }, []);
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
            {/* Товар 1 */}
            <div
              className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl
                      bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <img
                src="/item.jpg"
                alt="Product name"
                className="w-full sm:w-28 h-52 sm:h-28 object-cover rounded-xl"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Product Name
                  </h2>
                  <p className="text-[#A50044] font-semibold mt-1">$120</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                  {/* Количество */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="w-8 h-8 flex items-center justify-center
                         border border-neutral-600 rounded-lg
                         hover:border-[#004D98] hover:text-[#004D98]
                         focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         transition cursor-pointer"
                    >
                      −
                    </button>
                    <span className="text-white font-medium min-w-[1.5rem] text-center">
                      1
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="w-8 h-8 flex items-center justify-center
                         border border-neutral-600 rounded-lg
                         hover:border-[#004D98] hover:text-[#004D98]
                         focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         transition cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Выбор доставки */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-400">Shipping:</span>
                    <select
                      aria-label="Shipping method"
                      defaultValue="standard"
                      className="bg-transparent border border-neutral-600 rounded-lg px-2 py-1
                         text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         cursor-pointer"
                    >
                      <option value="standard" className="bg-[rgb(10,15,45)]">
                        Standard ($5)
                      </option>
                      <option value="express" className="bg-[rgb(10,15,45)]">
                        Express ($10)
                      </option>
                      <option value="free" className="bg-[rgb(10,15,45)]">
                        Free ($0)
                      </option>
                    </select>
                  </div>

                  {/* Удалить */}
                  <button
                    type="button"
                    aria-label="Remove item"
                    className="text-neutral-400 hover:text-[#A50044] transition font-medium
                       focus:outline-none focus:text-[#A50044] cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Товар 2 */}
            <div
              className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl
                      bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <img
                src="/item2.jpg"
                alt="Another product"
                className="w-full sm:w-28 h-52 sm:h-28 object-cover rounded-xl"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Another Item
                  </h2>
                  <p className="text-[#A50044] font-semibold mt-1">$120</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                  {/* Количество */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      className="w-8 h-8 flex items-center justify-center
                         border border-neutral-600 rounded-lg
                         hover:border-[#004D98] hover:text-[#004D98]
                         focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         transition cursor-pointer"
                    >
                      −
                    </button>
                    <span className="text-white font-medium min-w-[1.5rem] text-center">
                      2
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      className="w-8 h-8 flex items-center justify-center
                         border border-neutral-600 rounded-lg
                         hover:border-[#004D98] hover:text-[#004D98]
                         focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         transition cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Выбор доставки — Express для разнообразия */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-400">Shipping:</span>
                    <select
                      aria-label="Shipping method"
                      defaultValue="express"
                      className="bg-transparent border border-neutral-600 rounded-lg px-2 py-1
                         text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         cursor-pointer"
                    >
                      <option value="standard" className="bg-[rgb(10,15,45)]">
                        Standard ($5)
                      </option>
                      <option value="express" className="bg-[rgb(10,15,45)]">
                        Express ($10)
                      </option>
                      <option value="free" className="bg-[rgb(10,15,45)]">
                        Free ($0)
                      </option>
                    </select>
                  </div>

                  {/* Удалить */}
                  <button
                    type="button"
                    aria-label="Remove item"
                    className="text-neutral-400 hover:text-[#A50044] transition font-medium
                       focus:outline-none focus:text-[#A50044] cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
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
