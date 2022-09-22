import React from "react";
import "./about.css";
import mission from "../../assets/images/missionIcon.png";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <div className="video-redirect-container">
          <div className="video-redirect-content-container">
            <h1>See our beautiful journey to Sidhbari!</h1>
            <button>Watch More</button>
          </div>
        </div>
        <div className="about-content-container">
          <div className="content">
            <div className="img">
              <img src={mission} alt="" />
            </div>
            <div className="about-content">
              <h3>About Chinmaya Mission</h3>
              <p>
                Chinmaya Mission® was established in India in 1953 by devotees
                of the world-renowned Vedanta teacher, His Holiness Swami
                Chinmayananda. Guided by his vision, devotees all around the
                world formed the nucleus of a spiritual renaissance movement
                that now encompasses a wide range of spiritual, educational, and
                charitable activities, ennobling the lives of thousands in India
                and across its borders. Presently, headed by His Holiness Swami
                Swaroopananda, the Mission is administered by Central Chinmaya
                Mission Trust (CCMT) in Mumbai, India. Under his guidance, the
                Mission has continued mushrooming across the globe and stands
                today with over 300 centres worldwide.
              </p>
              <button className="btn">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
