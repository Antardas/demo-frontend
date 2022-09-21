import React from "react";
import "./news.css";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";

const News = () => {
  return (
    <div className="news-container">
      <div className="news-content-container">
        <div className="news-heading">
          <h4>News</h4>
          <p>Be in touch with the community!</p>
        </div>
        <div className="news-content-wrapper">
          <div>
            <div className="news-card-content">
              <h1 className="news-heading-text">
                Vaikunta Ekadashi Celebrations at Hosur
              </h1>
              <p className="news-description">
                Shri Vaikunta Ekadashi was celebrated at Chinmaya Upasana,
                Chinmaya Mission Hosur, on 13 January 2022. Shri Omkara
                Mahavishnu, at 5 AM IST followed by special Alankara.
              </p>
              <button className="btn">Read More</button>
            </div>
            <div className="news-image">
              <img src={news1} alt="" />
            </div>
          </div>
          <div>
            <div className="news-image">
              <img src={news2} alt="" />
            </div>
            <div className="news-card-content">
              <h1 className="news-heading-text">
                Shri Hanuman Chalisa Maha Parayana Homa at Hosur
              </h1>
              <p className="news-description">
                On the auspicious occasion of Shri Hanuman Jayanti on 1 January
                2022, a Samashti Shri Hanuman Chalisa Maha Parayana Homa was
                organized by Chinmaya Mission Hosur.
              </p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
