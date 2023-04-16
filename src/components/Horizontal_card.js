import React from "react";

const Horizontal_card = (props) => {
  return (
    // <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    //   {/* Card */}
    <div className="rounded-xl relative Class text-start">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white px-4">
        <p className="font-bold text-2xl px-2 pt-4">{props.name}</p>
        <p className="px-2">Through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={props.image}
        alt="/"
      />
    </div>
    // </div>
  );
};

export default Horizontal_card;
