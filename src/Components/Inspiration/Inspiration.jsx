import React from "react";
// import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import img1 from "../../assets/images/insp1.png";
import img2 from "../../assets/images/insp2.png";
import img3 from "../../assets/images/insp3.png";
import "./inspiration.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
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
      <div className="inspiration-top-second-container">
        <div className="inspiration-text">
          <h3>Inspiration</h3>
          <p>Come find peace by attending our events. </p>
        </div>
        <div className="inspiration-box">

          <div className="inspiration-list">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 640px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {data.map((data) => {
                return (
                  <SwiperSlide>
                    <div className="inspiration-box-content" key={data.heading}>
                      <div className="inspiration-box-content-img">
                        <img src={data.img} alt="inspiration" />
                      </div>
                      <div className="inspiration-box-content-text">
                        <h3 className="inspiration-text-desc">
                          {data.heading}
                        </h3>
                        <p className="date">{data.date}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
