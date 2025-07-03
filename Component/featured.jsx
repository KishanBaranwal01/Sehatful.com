// FeaturedCategory.jsx
import React, { useRef } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const featuredItems = [
  {
    name: 'Chutney & Achar',
    image: 'https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/2Wa5Ntb8FL-1745307325517.png',
    link: '#',
  },
  {
    name: 'Chillas',
    image: 'https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/C6oUNwWaYR-1745307377187.png',
    link: '#',
  },
  {
    name: 'Parathas',
    image: 'https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/1t49MsHYlh-1745307400911.png',
    link: '#',
  },
  {
    name: 'Spices',
    image: 'https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/Category/dpIaehj4dT-1745307433533.png',
    link: '#',
  },
];

const FeaturedCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 px-4 bg-[#f7f8f1]  ">
      <div className="flex justify-between items-center mb-6 ">
        <div>
          <h2 className="text-4xl font-bold text-[#3e503c] p-5">Featured Category</h2>
          <p className="text-[#3e503c] font-semibold text-2xl pl-5">Our best-selling categories of all time</p>
        </div>
        <div className="space-x-3 flex ">
          <button
            className=" bg-[#4d6042] text-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg"
            onClick={() => scroll('left')}
          >
            <FaArrowCircleLeft className="w-10 h-10"/>
          </button>
          <button
            className=" bg-[#4d6042] text-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg"
            onClick={() => scroll('right')}
          >
            <FaArrowCircleRight className="w-10 h-10"/>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-6 justify-between  scrollbar-hide px-10  mb-5 overflow-x-hidden hover:shadow-lg"
        style={{ scrollBehavior: 'smooth' }}
      >
        {featuredItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="w-84 flex-shrink-0 bg-[#eef7ea] rounded-[30px] overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex flex-col items-center justify-between h-[400px]  pt-10 pb-4 px-4">
              <img src={item.image} alt={item.name} className="w-46 h-46 object-contain" />
              <p className="text-[#3e503c] text-2xl font-medium mb-6">{item.name}</p>
              <div className="w-full bg-[#d7e6cd] rounded-b-[30px] py-3 px-4 text-[#3e503c] text-xl pl-8 font-semibold flex justify-between items-center">
                Explore <span className="ml-2"><FaArrowCircleRight className="w-8 h-7"/></span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
