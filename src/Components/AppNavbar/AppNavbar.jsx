import React, { useEffect, useState, useRef } from "react";
import "./appNavbar.css";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
const AppNavbar = () => {
  const [showHamBurger, setShowHamBurger] = useState(false);
  const navbarRef = useRef(null);
  const iconRef = useRef(null);

  const handleButtonClick = (e) => {
    navbarRef.current.classList.toggle("show");
    e.preventDefault();
    setShowHamBurger(!showHamBurger);
  };




  return (
    <div className="main-menu-container">
      <button className="menu-icon" onClick={handleButtonClick} ref={iconRef}>
        <AiOutlineMenu />
      </button>
      <div className="appNavbar-container" ref={navbarRef}>
        <div className="content-container active">
          {/* Logo Section */}
          <div className="logo-container">
            <span>
              <img src={logo} alt="" />
            </span>
            <span className="logo-text">
              <span>SANDEEPANY HIMALAYAS</span>
              <span>Sidhbari - Chinmaya Tapovan Trust</span>
            </span>
          </div>
          {/* Menu Section */}
          <div className="menu-container">
            <ul>
              <li>Home</li>
              <li>
                About us <AiOutlineDown />
              </li>
              <li>
                Attractions <AiOutlineDown />
              </li>
              <li>
                Explore <AiOutlineDown />
              </li>
              <li>Donate</li>
              <li>News</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
