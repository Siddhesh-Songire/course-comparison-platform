import "./App.css";
import React from "react";

import Food from "./components/Food";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import NavbarTaiwind from "./components/NavbarTaiwind";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTaiwind />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Food />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
