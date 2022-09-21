import React from "react";
import "./activities.css";
import act1 from "../../assets/images/act1.png";
import act2 from "../../assets/images/act2.png";
const Activities = () => {
  return (
    <div className="activities-container">
      <div className="activities-content-container">
        <div className="activities-image-section">
          <div className="inner">
            <span className="bg orange">
              <p>Spiritual Camps</p>
            </span>
            <span>
              <img src={act1} alt="" />
            </span>
          </div>
          <div className="inner">
            <span>
              <img src={act1} alt="" />
            </span>
            <span className="bg gray">
              <p>Sandeepany Gurukul</p>
            </span>
          </div>
        </div>
        <div className="activities-text-section">
          <h4>Our Activities </h4>
          <p>
            We aim to empower youth with the vision, values and dynamism for
            success in all fields, where young people are made aware of their
            potential through the study of scriptures. We organize cultural,
            social and spiritual programmes.
          </p>
          <button className="btn">Explore</button>
        </div>
      </div>
    </div>
  );
};
export default Activities;
