import React, { useEffect } from "react";
import "./dashboard.css";
const Dashboard = () => {
  const [quote, setQuote] = React.useState({
    quote: "",
    author: "",
  });
  const onQuoteChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const onQuoteSubmit = (e) => {
    console.log(quote);
    e.preventDefault();
    fetch("https://demo-peacock.fly.dev/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });
  };
  

  return (
    <div onSubmit={onQuoteSubmit} className="dashboard-container">
      <form>
        <textarea
          className="quote-section"
          name="quote"
          cols="30"
          rows="10"
          placeholder="Enter Quote here"
          value={quote.quote}
          onChange={onQuoteChange}
        ></textarea>
        <input
          type="text"
          placeholder=" Quote Author"
          value={quote.author}
          onChange={onQuoteChange}
          name="author"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
