import React, { useEffect, useState } from "react";
import "./appNavbar.css";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
const AppNavbar = () => {
  const [showHamBurger, setShowHamBurger] = useState(false);
 
  useEffect(() => {
    console.log(window);
    setShowHamBurger(prev => !prev);
  }, [showHamBurger]);
  return (
    <div className="appNavbar-container">
      <div className="content-container">
        {/* Logo Section */}
        <div className="logo-container">
          <span>
            <img src={logo} alt="" />
          </span>
          <span className="logo-text">
            <span>SANDEEPANY HIMALAYAS</span>
            <span>Sidhbari – Chinmaya Tapovan Trust</span>
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
  );
};

export default AppNavbar;
