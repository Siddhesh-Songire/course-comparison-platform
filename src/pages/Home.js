import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Horizontal_scroll from "../components/Horizontal_scroll";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Cards />
      {/* <Horizontal_scroll /> */}
    </div>
  );
};

export default Home;
