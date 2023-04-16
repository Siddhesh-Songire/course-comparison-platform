import React, { useState } from "react";
// import { data } from "../data/data.js";
import { course_data } from "../data/course_data";

const Food = () => {
  console.log(course_data);
  const [foods, setFoods] = useState(course_data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      course_data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  // const filterPrice = (price) => {
  //   setFoods(
  //     course_data.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  // Filter by tags
  // const filterCoursesByTag = (tag) => {
  //   const filteredCourses = foods.filter((course) => course.tags.includes(tag));
  //   setFoods(filteredCourses);
  // };

  ///----
  const [activeTags, setActiveTags] = useState([]);
  const uniqueTags = [...new Set(foods.flatMap((course) => course.tags))];

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
    filterCoursesByTags();
  };

  const filterCoursesByTags = () => {
    if (activeTags.length === 0) {
      setFoods(foods);
    } else {
      const filteredCourses = foods.filter((course) =>
        activeTags.every((tag) => course.tags.includes(tag))
      );
      setFoods(filteredCourses);
    }
  };

  //-------------------------------------

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFoods(course_data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("AI")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              AI
            </button>
            <button
              onClick={() => filterType("Management")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Management
            </button>
            <button
              onClick={() => filterType("ML")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ML
            </button>
            <button
              onClick={() => filterType("Other")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Other
            </button>
          </div>
        </div>

        {/* Filter Price */}
        {/* <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterCoursesByTag("Tag1")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Tag1
            </button>
            <button
              onClick={() => filterCoursesByTag("Tag2")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Tag2
            </button>
            <button
              onClick={() => filterCoursesByTag("Tag3")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Tag3
            </button>
            <button
              // onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div> */}

        {/* custom tags */}

        <div>
          <p className="font-bold text-gray-700">Filter by Tags</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`className="mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white" ${
                  activeTags.includes(tag)
                    ? "bg-orange-600 text-white"
                    : "bg-white-400"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Display foods */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <a href={item.URL} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.course_name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            </a>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.course_name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.tags}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div> */}

      {/* Card component  */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="relative border rounded-lg overflow-hidden hover:shadow-2xl duration-300"
          >
            <a href={item.URL} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.course_name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            </a>
            <div className="absolute top-0 left-0 bg-gray-800 text-white rounded-tl-lg rounded-br-lg px-4 py-1">
              <p className="text-sm">{item.category}</p>
            </div>
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.course_name}</p>
              <div className="bg-gray-800 text-white rounded-full px-4 py-1">
                <p className="text-sm">{item.category}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-start px-2 pb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
