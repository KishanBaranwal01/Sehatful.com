import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Category from "../Component/Category";
import FeaturedCategory from "../Component/featured";
import RecentlyPurchased from "../Component/CardSectoin";
import Subscribe from "../Component/Subscribe";

export default function Banner() {
  return (
    <div className="relative w-full bg-[#eaf0e5] pb-10 overflow-hidden">
      
      <div
        className="w-full  h-36 bg-no-repeat bg-top bg-contain"
        style={{
          backgroundImage: "url('https://sehatful.com/static/media/grass.1f930c40d4b14217fe9d.png')", 
        }}
      ></div>

      
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-md cursor-pointer shadow-md hover:shadow-xl transition duration-300 "
        onClick={() => navigate("/order")} 
      >
        <img
          src="https://sehatful.s3.ap-south-1.amazonaws.com/Ads_Banner/web/zrPo696HH7-1745316068918.png"
          alt="Paratha Banner"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
  
      <div className="fixed bottom-6 left-6 z-20">
        <button className="w-14 h-14 bg-[#375836] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all">
          <FaWhatsapp className="text-white text-2xl" />
        </button>
      </div>

       <div className="w-full  pt-10">
         <Category/>
        <FeaturedCategory/>
        <div className="flex items-center justify-center w-full">
            <img  className="w-full pt-20" src="https://sehatful.com/static/media/image.4e83baff3efded0eee01.png" alt="" />
        </div>
    </div>
    <RecentlyPurchased/>
    <div className="flex items-center justify-center w-full">
            <img  className="w-full pt-20" src="https://sehatful.com/static/media/image.4e83baff3efded0eee01.png" alt="" />
        </div>
        
        <Subscribe/>
        
    </div>
  );
}
