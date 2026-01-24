import { NavLink } from 'react-router'
import './ShopHeader.css'
import BarcaLogo from '../../../../assets/icons/barca-logo.png'

export function ShopHeader(){
  return(
    <>
      <div className="fixed top-0 left-0 right-0 h-15 p-3.75 text-center bg-white text-xl font-bold flex items-center justify-between z-1020">
        <div className="flex items-center text-[rgb(10,15,45)] gap-1.25">
          <div className="h-12.5">
            <img src={BarcaLogo} alt="" className="h-12.5" />
          </div>
          <div className="shop-logo-title">
            <div className="text-[16px] text-[rgb(111,5,5)] -mt-1.5">
              store
            </div>
            <div className="barca">
              Barca
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1.25">
          <input type="text" placeholder='Search...' className='h-10.5 w-75 p-2.25 border border-solid rounded-2xl' />
          <button className="flex items-center justify-center border border-solid bg-white h-10.5 w-13.5 cursor-pointer rounded-lg">
            <img src="pictures/shop-logos/search.svg" alt="" className="h-10 " />
          </button>
        </div>
        <div className="right-section-shop">
          <NavLink to='cart' className="cart-header">
              <div className="relative">
                <img src="pictures/shop-logos/shopping-cart.png" className="h-12.5" />
                <div className="absolute right-0 left-0 top-2 z-1200 text-xl text-[rgb(10,15,45)]">4</div> 
              </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}