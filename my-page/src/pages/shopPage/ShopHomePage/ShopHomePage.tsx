import { ShopHeader } from "./shopComponents/ShopHeader";
import { useState } from "react";

interface CounterProps{
  min?:number;
  max?: number;
  onAddToCart?: (quantity:number) => void
}
export function ShopHomePage() {
  

  const Counter: React.FC<CounterProps> = ({min = 1,max = 10,onAddToCart}) =>{
     const [quantity, setQuantity] = useState(min) 

      const increase = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };
   const decrease = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };
    if (onAddToCart) {
      onAddToCart(quantity);
    }
    return(
      <>
        <button className="border-none bg-white text-[34px] cursor-pointer" onClick={decrease}>-</button>
              <div className="text-3xl">{quantity}</div>
              <button className="border-none bg-white text-[34px] cursor-pointer" onClick={increase}>+</button>
      </>
    )
  }

  return (
    <>
      {<ShopHeader />}
      <div className="grid grid-cols-3 gap-1.25 mt-25">
        <div className="bg-white rounded-3xl flex flex-col items-center">
          <div className="item-img-div">
            <img
              src="pictures/items/pedri-ucl-jersey.webp"
              alt=""
              className="h-81.75 rounded-tl-3xl rounded-tr-3xl"
            />
          </div>
          <div className="item-information ml-1.25 text-[19px] font-medium flex flex-col gap-2.5">
            <div className="item-name">
              PEDRI | UCL Men's home jersey 25/26 FC Barcelona
            </div>
            <div className="item-price">$25.00</div>
            <div className="item-revew">
              <div className="item-stars">
                <div className="flex items-center">
                  <div style={{ width: 40, height: 40, position: "relative" }}>
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
                        clipPath: `inset(${100 - 70}% 0 0 0)`,
                      }}
                    >
                      <path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-3.5L6 22l1.5-8L2 9.5 9 9z" />
                    </svg>
                  </div>
                  <div className="number-rating">
                    9.1 rating
                    <div className="revew-quantity">123 reviews</div>
                  </div>
                  
                </div>
              </div>
              
            </div>
            <div className="flex gap-1.25 items-center justify-center">
              <Counter />

            </div>
          </div>
          <button className="bg-[rgb(10,15,45)] text-xl font-semibold px-22.5 py-2.5 rounded-2xl mb-1.25 cursor-pointer text-white">Add</button>
        </div>
        <div className="item-content">
          <div className="item-img-div">
            <img src="" alt="" className="item-img" />
          </div>
          <div className="item-information">
            <div className="item-name"></div>
            <div className="item-price">$25.00</div>
            <div className="item-revew">
              <div className="item-stars">
                <img src="" alt="" className="stars-img" />
              </div>
              <div className="revew-quantity">123</div>
            </div>
            <div className="quantity-change"></div>
          </div>
          <button className="add-button">Add</button>
        </div>
        <div className="item-content">
          <div className="item-img-div">
            <img src="" alt="" className="item-img" />
          </div>
          <div className="item-information">
            <div className="item-name"></div>
            <div className="item-price">$25.00</div>
            <div className="item-revew">
              <div className="item-stars">
                <img src="" alt="" className="stars-img" />
              </div>
              <div className="revew-quantity">123</div>
            </div>
            <div className="quantity-change"></div>
          </div>
          <button className="add-button">Add</button>
        </div>
      </div>
    </>
  );
}
