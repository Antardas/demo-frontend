import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import img1 from "../../assets/images/insp1.png";
import img2 from "../../assets/images/insp2.png";
import img3 from "../../assets/images/insp3.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineShareAlt } from "react-icons/ai";
import "./inspiration.css";
const data = [
  {
    heading: "National Science Day at Chinmaya Degree College..",
    date: "28 Feb 2022",
    img: img1,
  },
  {
    heading: "How can we liberate ourselves from our sorrows?",
    date: "22 Feb 2022",
    img: img2,
  },
  {
    heading: "What Does It Mean to Be The Best?",

    img: img3,
    date: "20 Feb 2022",
  },
];
const Inspiration = () => {
  return (
    <div className="inspiration-content-container">
      <div>
        <div className="inspiration-text">
          <h3>Events</h3>
          <p>Come find peace by attending our events. </p>
        </div>
        <div className="inspiration-box">
          <span>
            <BsArrowLeftCircle />
          </span>
          <div className="inspiration-list">
            {data.map((data) => {
              return (
                <div className="inspiration-box-content" key={data.heading}>
                  <div className="inspiration-box-content-img">
                    <img src={data.img} alt="inspiration" />
                  </div>
                  <div className="inspiration-box-content-text">
                    <h3 className="inspiration-text-desc">{data.heading}</h3>
                    <p className="date">{data.date}</p>
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

export default Inspiration;
