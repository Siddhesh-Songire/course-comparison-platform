import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Horizontal_scroll from "./components/Horizontal_scroll";
import Footer from "./components/Footer";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Cards from "./components/Cards";
import NavbarTaiwind from "./components/NavbarTaiwind";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NavbarTaiwind />
      <Hero />
      {/* <EmblaCarousel /> */}
      <Cards />
      {/* <HeadlineCards /> */}
      <Horizontal_scroll />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
