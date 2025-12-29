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
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img src={BarcaLogo} alt="Logo" className="barca-logo"/>
          Blaugrana
        </NavLink>
      </div>
      <div className="right-section">
        <button onClick={() => openMenu()} className={`menu-button ${open ? 'open' : ''}`}>
          <img src={MenuIcon} alt="Menu" className="menu-icon"/>
        </button>
      </div>
    </div>
    <div className="menu">
        
          <div className={`menu-content right ${open ? ' open' : ''}`}>
            <div className="close-button-conteiner">
              <button onClick={openMenu} className="close-button">close X</button>
            </div>
            <div className="searc-container">
              <input type="text" placeholder="Search" className="search-input"/>
            </div>
            <div className="nav-links">
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