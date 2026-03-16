import { ShopHeader } from "./ShopHomePage/shopComponents/ShopHeader";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchItems } from "../../store/slice/itemSlice";
import { addToCart, initializeCart } from "../../store/slice/cartSlice";

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
  shippingMethod: "standard" | "express" | "free"
}


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

  const dispatch = useAppDispatch()
  const{ items, loading, error} = useAppSelector((state) => state.items)
  const cartId = useAppSelector((state) => state.cart.cartId)

  useEffect(() => {
    if(items.length === 0){
      dispatch(fetchItems())
    }
  }, [dispatch,items.length]);

  useEffect(() => {
    dispatch(initializeCart())
  }, [dispatch]);



  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!items.length) return <div>Нет данных о матчах</div>;    

  const handleAddToCart = async (
    productId: string,
    quantity: number,
  ) => {
    console.log(`Adding ${quantity} of product ${productId} to cart`);

    dispatch(addToCart({productId,quantity}))
  };

  return (
    <>
      <ShopHeader cartId= {cartId}/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-1.25 mt-25">
        {items.map((product) => {
          return (
            <>
              <div
                key={product._id}
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
                      handleAddToCart(product.id, quantity);
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
