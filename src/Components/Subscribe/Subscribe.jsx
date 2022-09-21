import React from "react";
import "./subscrib.css";

const Subscribe = () => {
    return (
      <div className="subscribe-container">
        <div className="subscribe-content-container">
          <div className="subscribe-text">
            <h3>Subscribe to stay in touch</h3>
            <p>
              Subscribe with email, get of meaningful news, updates of events
              will be sent to you on a daily basis. We do not spam with any
              unnecessary topic.
            </p>
          </div>
          <div className="subscribe-form">
            <form action="">
              <input type="text" />
              <input type="email" />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;
