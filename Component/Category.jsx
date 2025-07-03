import React, { useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";



const categories = [
  {
    name: "Sandwiches",
    icon: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/9j0HNnWg35-1745305926749.png",
    link: "#",
  },
  {
    name: "Cold Press Juice",
    icon: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/WPznimQen6-1745306059809.png",
    link: "#",
  },
  {
    name: "Combos",
    icon: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/W6acUgxQg5-1745306028701.png",
    link: "#",
  },
  {
    name: "Chutney & Achar",
    icon: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/nVma58QTnU-1745306133457.png",
    link: "#",
  },
  // Add more items if needed
];

const BestSellingCategories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f6f7ef] py-8 px-4 relative ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-[#3e503c] p-5">
          Best Selling Categories
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className=" rounded-full bg-[#4b5d45] text-white flex items-center justify-center hover:shadow-lg "
          >
            <FaArrowCircleLeft className="w-10 h-10"/>
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10   rounded-full bg-[#4b5d45] text-white flex items-center justify-center hover:shadow-lg"
          >
            <FaArrowCircleRight className="w-10 h-10"/>
           

          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden scrollbar-hide pb-4 py-10"
      >
        {categories.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="relative w-60 min-w-[400px] h-40 bg-white p-4 pt-12 rounded-2xl shadow-md flex-shrink-0 hover:shadow-lg"
          >
            {/* Floating Icon */}
            <div className="absolute -top-10 right-6 bg-[#eef7ea] w-24 h-24 rounded-2xl shadow-lg flex items-center justify-center z-10">
              <img src={item.icon} alt={item.name} className="w-20 h-20" />
            </div>

            {/* Category Name */}
            <p className="text-2xl text-[#3e503c] font-medium mb-4">
              {item.name}
            </p>

            {/* Bottom right icon (→) */}
            <div className="flex justify-end">
              <div className=" rounded-full bg-[#a9cbb2] flex items-center justify-center text-white">
                 <FaArrowCircleRight className="w-8 h-8"/>

                
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BestSellingCategories;
