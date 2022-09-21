import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import img1 from "../../assets/images/mahadev.png";
import img2 from "../../assets/images/holi.png";
import img3 from "../../assets/images/hanuman.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineShareAlt } from "react-icons/ai";
import "./events.css";
const data = [
  {
    heading: "Mahashivratri 2022",
    description: `May you and your loved
ones are always surrounded by
the blessings of
Lord Shiva.`,
    date: "28 Feb 2022",
    location: "Live event via Zoom",
    img: img1,
  },
  {
    heading: "Shri Ram Mandir",
    description: `Colons of happiness and joy are
the most beautiful colors. Come join us to being colors in your life.`,
    date: "19 Feb 2022",
    img: img2,
    location: "At Ram Mandir, Sidhbari",
  },
  {
    heading: "Veer Hanuman",
    description: `Chinmaya Mission is delighted to announce the 40th year of Shri Hanuman Mastakabhishek 2022.`,
    img: img3,
    date: "01 to 10 Oct 2022",
    location: "Live event via Zoom",
  },
];
const Events = () => {
  return (
    <div className="events-content-container">
      <div>
        <div className="events-text">
          <h3>Events</h3>
          <p>Come find peace by attending our events. </p>
        </div>
        <div className="events-box">
          <span>
            <BsArrowLeftCircle />
          </span>
          <div className="events-list">
            {data.map((data, i) => {
              return (
                <div className="events-box-content" key={i}>
                  <div className="events-box-content-img">
                    <img src={data.img} alt="events" />
                  </div>
                  <div className="events-box-content-text">
                    <h4>{data.heading}</h4>
                    <p className="events-date">
                    
                      <span>{<FaRegCalendarAlt />}</span> {data.date}
                    </p>
                    <p className="events-text-desc">{data.description}</p>
                    <p className="events-text-location">
                      <span>
                        <GoLocation />
                      </span>
                      {data.location}
                    </p>
                  </div>
                  <div className="events-button-group">
                    <button className="btn">View Details</button>
                    <button className="btn-share">
                      {<AiOutlineShareAlt />}
                    </button>
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

export default Events;
