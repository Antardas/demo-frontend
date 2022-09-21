import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content-container">
        <div className="carousel-content-box">
          <div className="details-box">
            <p className="details">
              It's time to give back to our communities where we live, work, and
              evolve.
            </p>
            <button className="btn">Explore</button>
          </div>
          <div>
            <span className="label">Global</span>
          </div>
        </div>
        <div className="dot-container">
          {Array.from({ length: 5 }).map((_, index) => {
            return <span className="dot" key={index}></span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
