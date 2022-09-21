import React from 'react'
import About from "../Components/About/About";
import Activities from "../Components/Activities/Activities";
import AppNavbar from "../Components/AppNavbar/AppNavbar";
import Attractions from "../Components/Attractions/Attractions";
import Carousel from "../Components/Carousel/Carousel";
import Communities from "../Components/Communities/Communities";
import Events from "../Components/Events/Events";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import Inspiration from "../Components/Inspiration/Inspiration";
import Navbar from "../Components/Navbar/Navbar";
import News from "../Components/News/News";
import Quote from "../Components/Quote/Quote";
import Subscribe from "../Components/Subscribe/Subscribe";
const Home = () => {
  return (
    <div>
      <Navbar />
      <AppNavbar />
      <Carousel />
      <About />
      <Attractions />
      <Activities />
      <Communities />
      <Events />
      <Quote />
      <News />
      <Experience />
      <Inspiration />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home