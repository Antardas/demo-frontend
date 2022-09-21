import React, { useEffect } from "react";
import shape2 from "../../assets/images/shape2.png";
import vector from "../../assets/images/vector.png";
import vector1 from "../../assets/images/vector1.png";
import "./quote.css";

const Quote = () => {
  const [quote, setQuote] = React.useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    fetch("https://demo-peacock.fly.dev/quote")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(() => data.data.quote);
      });
  }, []);
  return (
    <div className="quote-container">
      <div className="quote-content-container">
        <div>
          <img src={vector} alt="" />
        </div>
        <div>
          <div>
            <img src={shape2} alt="" />
          </div>
          <div className="quote-details">
            <p className="details">{quote.quote}</p>
            <p className="author">{quote.author}</p>
          </div>
        </div>
        <div>
          <img src={vector1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
