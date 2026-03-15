import axios from "axios";
import type { ServerItem } from "./ShopHomePage";

export function CheckoutItem({
  cartItem,
  cartId,
  onRemove,
  selectedShipping,
  onShippingChange,
  onQuantityChange,
}: {
  cartItem: ServerItem;
  cartId: string;
  onRemove: (itemId: string) => void;
  selectedShipping: "standard" | "express" | "free";
  onShippingChange: (
    itemId: string,
    method: "standard" | "express" | "free",
  ) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
}) {
  const itemId = cartItem.id;
 

  return (
    <>
      <div
        className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl
                      bg-white/5 backdrop-blur-sm border border-white/10"
      >
        <img
          src={cartItem.image}
          alt="Product name"
          className="w-full sm:w-28 h-52 sm:h-28 object-cover rounded-xl"
        />

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {cartItem.title}
            </h2>
            <p className="text-[#A50044] font-semibold mt-1">
              ${(cartItem.price / 100).toFixed(2)}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            {/* Количество */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => {
                  const newQuantity = cartItem.quantity - 1;

                  if (newQuantity >= 1) {
                    onQuantityChange(itemId, newQuantity);
                  }
                }}
                className="w-8 h-8 flex items-center justify-center
                         border border-neutral-600 rounded-lg
                         hover:border-[#004D98] hover:text-[#004D98]
                         focus:outline-none focus:ring-2 focus:ring-[#004D98]
                         transition cursor-pointer"
              >
                −
              </button>
              <span
                className="text-white font-medium min-w-6 text-center"
              >
                {cartItem.quantity}
              </span>
              <button
                type="button"
                onClick={() => onQuantityChange(itemId, cartItem.quantity + 1)}
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
                value={selectedShipping}
                onChange={(e) =>
                  onShippingChange(itemId, e.target.value as any)
                }
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
              onClick={() => {
                onRemove(cartItem.id)
              }}
              className="text-neutral-400 hover:text-[#A50044] transition font-medium
                       focus:outline-none focus:text-[#A50044] cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
