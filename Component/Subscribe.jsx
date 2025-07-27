import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import SubscribeBanner from "./SubscribeBanner";
import Deliver from "./Deliver";

const Subscribe = () => {
  const cards = [
    {
      title: "Breakfast Paratha",
      image:
        "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/fWCj0qM43C-1745310728347.png",
      link: "#paratha",
    },
    {
      title: "Daily Fresh Juice",
      image:
        "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/Wx6H1BfY1e-1745310483790.png",
      link: "#juice",
    },
    {
      title: "Green Salad",
      image:
        "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/Xyzt0gX23a-1745310449990.png",
      link: "#salad",
    },
    {
      title: "Fruit Bowl",
      image:
        "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/Zr4Fd0wPaA-1745310401234.png",
      link: "#fruit",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const showNext = () => {
    setStartIndex((prev) => (prev + 2) % cards.length);
  };

  const showPrev = () => {
    setStartIndex((prev) => (prev - 2 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[startIndex],
    cards[(startIndex + 1) % cards.length],
  ];

  return (
    <div className="min-h-screen bg-green-50 relative font-sans px-4">

      <div className="items-center mb-6 flex justify-between">
        <div class="flex gap-6 items-center">
          <div class="h-[60px] sm:h-full">
            <img
              alt="leaf"
              class="h-full"
              src="data:image/png;base64,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"
            />
          </div>
          <div class="flex flex-col">
            <span class="text-[#4d6042] text-4xl md:text-4xl font-bold title">
              Subscribe Now
            </span>
            <span class="text-[#4d6042] text-base md:text-2xl">
              Subscribe for hassle free experience
            </span>
          </div>
        </div>
        <div className="space-x-3 flex right-0">
          <button
            className=" bg-[#4d6042] text-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg"
            onClick={() => scroll("left")}
          >
            <FaArrowCircleLeft className="w-10 h-10" />
          </button>
          <button
            className=" bg-[#4d6042] text-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg"
            onClick={() => scroll("right")}
          >
            <FaArrowCircleRight className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Cards and Arrows */}
      <div className="flex justify-start pt-20   items-start gap-6 relative ">
        {/* Cards */}
        <div className="flex gap-10">
          {visibleCards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-white w-72 p-6 rounded-t-[100px] rounded-b-2xl shadow-lg flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white -mt-16"
              />
              <h2 className="text-xl font-semibold text-green-900 mb-2 text-center">
                {card.title}
              </h2>
              <button className="text-green-800 font-medium flex items-center">
                Explore <span className="ml-1">→</span>
              </button>
            </a>
          ))}
        </div>

      </div>

      <SubscribeBanner />
      <Deliver />
    </div>
    
    
  );
};

export default Subscribe;
