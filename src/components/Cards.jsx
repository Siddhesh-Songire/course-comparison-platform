import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 cards">
      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        <img
          className="w-full max-h-[300px] object-cover"
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
          alt="AI Course"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Best AI Course</div>
          <p className="text-gray-700 text-base">
            Learn the latest techniques in Artificial Intelligence from industry
            experts. Our course covers everything from the basics to advanced
            topics in machine learning and natural language processing.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #AI
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #MachineLearning
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NLP
          </span>
        </div>
      </div>

      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        <img
          className="w-full max-h-[300px] object-cover"
          src="https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Web Development Course"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Best Web Development Course
          </div>
          <p className="text-gray-700 text-base">
            Master the latest web development frameworks and technologies,
            including React, Angular, and Node.js. Our comprehensive course
            covers everything you need to know to build professional-grade web
            applications.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #WebDevelopment
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NodeJS
          </span>
        </div>
      </div>

      <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
        <img
          className="w-full max-h-[300px] object-cover"
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Management Course"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Best Management Course</div>
          <p className="text-gray-700 text-base">
            Develop the skills you need to succeed in today's fast-paced
            business environment. Our course covers a wide range of topics,
            including leadership, strategy, and finance, and is
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #WebDevelopment
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NodeJS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
