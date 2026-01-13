import { NavLink } from "react-router";
import BarcaLogo from "../../assets/icons/barca-logo.png";
import MenuIcon from "../../assets/icons/menu-icon.png";
import React, { useState } from "react";
import "./Header.css";

export function Header() {
  const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  
  function openMenu() {
    setOpen(!open);
  }

  return (
  <>
    <div className="fixed top-0 left-0 right-0 h-17 bg-[rgb(9,15,45)] p-3.75 text-center text-[20px] font-bold flex items-center justify-between z-1020">
      <div className="p-2.5">
        <NavLink to="/" className="no-underline text-white font-bold flex items-center gap-1.25">
          <img src={BarcaLogo} alt="Logo" className="h-10 bg-transparent"/>
          Blaugrana
        </NavLink>
      </div>
      <div className="p-1.25">
        <button onClick={() => openMenu()} className={`menu-button ${open ? 'open' : ''} bg-transparent border-none cursor-pointer transition-transform duration-300 ease`}>
          <img src={MenuIcon} alt="Menu" className="h-12.5 bg-transparent"/>
        </button>
      </div>
    </div>
    <div className="menu">
        
          <div className={`w-125 fixed top-0 h-full bg-[rgb(8,14,45)] border-l-5 border-[#81040b]
                           transition-transform duration-200 ease-in-out z-1021
                           flex flex-col gap-2.5 
                           menu-content right ${open ? ' open' : ''}`}>
            <div className="flex justify-end p-2.5 w-full h-7.5">
              <button onClick={openMenu} className="bg-transparent border-none cursor-pointer text-white text-xl mr-5 hover:text-[#8b8b8b]">close X</button>
            </div>
            <div className="searc-container">
              <input type="text" placeholder="Search" className="w-[90%] p-2.5 h-9.5 border-none border-r-2.5 ml-2.5 mt-3 mr-2.5 text-[16px] bg-amber-50"/>
            </div>
            <div className="flex flex-col gap-3.75 mt-5 ml-5">
              <div className="link-container history-link">
                <NavLink to="/history" className="link-nav">History</NavLink>
              </div>
              <div className="link-container first-team-link">
                <NavLink to="/team" className="link-nav">First-Team</NavLink>
              </div>
              <div className="link-container matches-link">
                <NavLink to="/matches" className="link-nav">Matches</NavLink>
              </div>
              <div className="link-container shop-link">
                <NavLink to="/shop" className="link-nav">Shop</NavLink>
              </div>
              <div className="link-container legendary-players-link">
                <NavLink to="/legendary-players" className="link-nav">Legendary Players</NavLink>
              </div>
              <div className="link-container about-link">
                <NavLink to="/about" className="link-nav">About</NavLink>
              </div>
            </div>
          </div>
    </div>
  </>
  );
}