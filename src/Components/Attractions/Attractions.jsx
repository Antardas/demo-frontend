import React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
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
    <div className="attraction-top-wrapper">
      <div className="attraction-top-second-wrapper">
        <div className="attraction-text">
          <h3>Attractions</h3>
          <p>Explore Them. Explore Sidhbari. </p>
        </div>
        <div className="attraction-box">
          {/* <span>
            <BsArrowLeftCircle />
          </span> */}
          <div className="attraction-list">
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
                  spaceBetween: 40,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="attraction-card-container">
                      <div className="attraction-card-image">
                        <img src={item.img} alt="attraction" />
                      </div>
                      <div className="attraction-card-text">
                        <h4>{item.heading}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="attraction-btn-container">
                        <button className="btn">Explore</button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <span>
            <BsArrowRightCircle />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Attractions;

/* 
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
{data.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
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
                  </SwiperSlide>
                );
              })}

*/
