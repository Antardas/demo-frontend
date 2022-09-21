import React from "react";
import "./navbar.css";
import india from "../../assets/images/india.png";
import avatar from "../../assets/images/avatar.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTelegram,
  BsSearch,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navabar-container">
      <div className="navbar-content-container">
        {/* Icon */}
        <div className="search-container">
          <div className="icons">
            <span>
              <BsFacebook />
            </span>
            <span>
              <BsTwitter />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <BsLinkedin />
            </span>
            <span>
              <BsYoutube />
            </span>
            <span>
              <BsTelegram />
            </span>
          </div>

          {/* Search */}
          <div className="search-box">
            <span>
              <BsSearch />
            </span>
            <input type="text" placeholder="Search Anything" />
          </div>
        </div>
        {/* Avatar (Author Details) */}
        <div className="details-container">
          <div className="flag-container">
            <span>
              <img src={india} alt="flag" />
            </span>
            <span className="hover-text">
              <span className="">Sandeepany Himalayas</span>
              <span>
                <AiOutlineDown className="down-icon " />
              </span>
            </span>
          </div>
          <div>
            <span className="hover-text">Contact us</span>
          </div>
          <div className="avatar-container">
            <span className="detail-text hover-text">
              <span>Raj Verma</span>
              <span>
                <AiOutlineDown className="down-icon" />
              </span>
            </span>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
