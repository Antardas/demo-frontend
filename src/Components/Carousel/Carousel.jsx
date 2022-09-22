import React from "react";
import "./carousel.css";
import image1 from "../../assets/images/slider/img1.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Carousel = () => {
  return (
    <div className="carousel-top-container">
      {/* <div className="carousel-container">
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
    </div> */}
      <div className="carousel-top-second-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <SwiperSlide>
                <div className="carousel-container">
                  <div className="carousel-content-container">
                    <div className="carousel-content-box">
                      <div className="details-box">
                        <p className="details">
                          It's time to give back to our communities where we
                          live, work, and evolve.
                        </p>
                        <button className="btn">Explore</button>
                      </div>
                      <div>
                        <span className="label">Global</span>
                      </div>
                    </div>
                    {/* <div className="dot-container">
                {Array.from({ length: 5 }).map((_, index) => {
                  return <span className="dot" key={index}></span>;
                })}
              </div> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
