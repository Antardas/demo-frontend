import React from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-content-container">
        <div className="experience-header-section">
          <h4>Experience</h4>
          <p>Grasp new knowledge and experiences by reading these articles</p>
        </div>
        <div className="experience-image-section">
          <div className="image-container">
            {/* <img className="experience-image" src={exp1} alt="" /> */}

            <span>Sidhbari</span>
          </div>
          <div className="image-container">
            {/* <img className="experience-image" src={exp2} alt="" /> */}
            {/* <span>Sidhbari</span> */}
            <div className="description">
              <h3>CORD</h3>
              <p>
                We educate people to find peace and provide them a source of
                income.
              </p>
              <span className="arrow-icon">
                <BsFillArrowRightCircleFill />
              </span>
            </div>
          </div>
          <div className="image-container">
            {/* <img className="experience-image" src={exp3} alt="" /> */}
            <span>Schools & Colleges</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
