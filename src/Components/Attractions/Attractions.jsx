import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import img1 from "../../assets/images/att-1.png";
import img2 from "../../assets/images/att-2.png";
import img3 from "../../assets/images/att-3.png";
import "./attractions.css";
const data = [
  {
    heading: "Samadhi",
    description: `The Bhu Samadhi of Pujya Gurudev was done on 9th August 1993. Built in traditional Kerala style, the Samadhi Sthala houses Swamiji's ashtadhatu pratima.`,
    img: img1,
  },
  {
    heading: "Shri Ram Mandir",
    description: `The construction of Shri Rama Mandir began in March 1983 and the temple with Vanavasi Lord Rama & Sita was consecrated on 22nd October 1983.`,
    img: img2,
  },
  {
    heading: "Veer Hanuman",
    description: `Construction began in 1979 and as per Gurudev's Sankalpa, a Veera Hanumanji's idol was to be installed. Swami Chinmayananda especially chose Sidhbari.`,
    img: img3,
  },
];
const Attractions = () => {
  return (
    <div className="attraction-content-container">
      <div>
        <div className="attraction-text">
          <h3>Attractions</h3>
          <p>Explore Them. Explore Sidhbari. </p>
        </div>
        <div className="attraction-box">
          <span>
            <BsArrowLeftCircle />
          </span>
          <div className="attraction-list">
            {data.map((data, i) => {
              return (
                <div className="attraction-box-content" key={i}>
                  <div className="attraction-box-content-img">
                    <img src={data.img} alt="attraction" />
                  </div>
                  <div className="attraction-box-content-text">
                    <h4>{data.heading}</h4>
                    <p>{data.description}</p>
                  </div>
                  <div>
                    <button className="btn">Explore</button>
                  </div>
                </div>
              );
            })}
          </div>
          <span>
            <BsArrowRightCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
