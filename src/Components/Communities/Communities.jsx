import React from "react";
import "./communities.css";
import cmt from "../../assets/images/cmt1.png";
const Communities = () => {
  return (
    <div className="community-container">
      <div className="community-content-container">
        <div className="community-header">
          <h3>Our Communities</h3>
          <p>This is how Chinmaya works with people</p>
        </div>
        <div className="community-details">
          <div className="community-image">
            <img src={cmt} alt="" />
          </div>
          <div className="community-founder">
            <p>
              It was a joy to see you and your grown up daughter and again her
              mother and a member.
            </p>
            <h4>Swami Chinmayananda</h4>
            <p>Founder of Chinmaya Mission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
