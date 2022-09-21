import React from "react";
import sig from "../../assets/images/sig.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div>
          <div>
            <img src={sig} alt="" />
            <h3>Central Chinmaya Mission Trust</h3>
            <p>Sandeepany Sadhanalaya</p>
            <p>Saki Vihar Road, Powai, Mumbai - 400 072.</p>
            <p>Tel.: +91-22-2803 4900</p>
            <p>E-mail: ccmt@chinmayamission.com</p>
          </div>
          <div className="useful-links-container">
            <div>
              <div>
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>

                  <li>Linkedin</li>
                  <li>Telegram</li>
                </ul>
              </div>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li>Publication</li>
                <li>Magazines</li>
                <li>Audios</li>

                <li>Videos</li>
                <li>Downloads</li>
              </ul>
            </div>
            <div>
              <h4>Links</h4>
              <ul>
                <li>About us</li>
                <li>Events</li>
                <li>Experiences</li>

                <li>Facilities</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4>Others</h4>
              <ul>
                <li>FAQ</li>
                <li>News</li>
                <li>Blogs</li>
                <li>Events</li>

                <li>Journey</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          
          </div>
      </div>
    </div>
  );
};

export default Footer;
