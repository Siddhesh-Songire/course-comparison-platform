import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Horizontal_scroll from "./components/Horizontal_scroll";
import Footer from "./components/Footer";
import { EmblaCarousel } from "./components/EmblaCarousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <EmblaCarousel />
      <HeadlineCards />
      <Horizontal_scroll />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
