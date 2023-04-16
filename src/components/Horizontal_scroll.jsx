import React from "react";
import { Dev_courses } from "../data/Devlopment_courses";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Horizontal_card from "./Horizontal_card";

function App() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-[1640px] mx-auto bg-slate-300 py-4 px-2 rounded-md">
      <h1 className="text-orange-600 font-bold text-3xl text-left">
        Top Rated Menu Items
      </h1>
      <div className="mx-auto relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {Dev_courses.map((item) => (
            <div className="inline-block p-2 mx-4 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <Horizontal_card image={item.image} name={item.course_name} />
            </div>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}

export default App;
