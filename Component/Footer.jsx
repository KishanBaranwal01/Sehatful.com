import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[#f7fbf3] text-[#3d4c35] px-6 md:px-20 pt-52 mb-16 relative overflow-visible">
        <div className="absolute -top-[100px] w-full flex flex-col items-center justify-center z-10">
          <div className="w-11/12 lg:w-3/4 xl:w-[75%] 2xl:w-[71%] bg-white p-4 lg:p-8 xl:p-12 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-2 2xl:gap-10 rounded-4xl shadow-lg hover:scale-105 transition-all">
            <div className="lg:col-span-2">
              <h2 className="text-2xl xl:text-4xl 2xl:text-5xl font-bold text-textColor">Experience our best app</h2>
              <p className="text-base md:text-xl lg:text-base xl:text-lg 2xl:text-2xl mt-2">Manage Your Cart easily reduce your add quantity of an item Easily add address and delivery method</p>
            </div>
            <div className="p-2 flex gap-4 items-center justify-center md:justify-end">
              <img src="https://sehatful.com/static/media/playstore.c572d2330364288242c7.png" alt="Google Play" className="w-40 lg:w-48" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-40">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="http://sehatful.com/static/media/logobig.4afa453b38dfdfe84e31.png" alt="Sehatful Logo" className="h-12" />
            </div>
            <p className="max-w-xs text-base font-semibold">
              Provide wholesome, organic, and nutrient-packed food, ensuring top quality and a commitment to sustainability
            </p>
            <div className="flex gap-4 mt-6">
              <img src="https://www.svgrepo.com/show/13643/facebook.svg" alt="Facebook" className="w-8 h-8 cursor-pointer shadow-md hover:shadow-xl transition duration-300" />
              <img src="https://www.svgrepo.com/show/13639/instagram.svg" alt="Instagram" className="w-8 h-8 cursor-pointer hover:shadow-xl transition duration-300" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fj1vqat9XLO4cFwOG1uFqLXYDcISiYil2w&s" alt="X" className="w-8 h-8 cursor-pointer hover:shadow-xl transition duration-300" />
              <img src="https://www.svgrepo.com/show/13671/youtube.svg" alt="YouTube" className="w-8 h-8 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-10">Company Info</h3>
            <ul className="space-y-1 text-base">
              <li><a href="#" className="hover:text-[#94ae7d] font-semibold">About Us</a></li>
              <li><a href="#" className="hover:text-[#94ae7d] font-semibold">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#94ae7d] font-semibold">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-base">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 font-semibold">
              <img src="/icons/email.svg" alt="Email" className="w-5 h-5" /> sehatfulofficial@gmail.com
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <img src="/icons/phone.svg" alt="Phone" className="w-5 h-5" /> +91 1234567890
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" /> +91 1234567890
            </p>
            <p className="flex items-start gap-2 font-semibold">
              <img src="/icons/location.svg" alt="Location" className="w-5 h-5 mt-1 " />
              IndraPuri Sector C , Bhopal , Madhya Pradesh , India 
            </p>
          </div>
        </div>
      </footer>

      <div className="bg-black/50 text-white text-sm w-full px-6 py-4">
        <p className="text-left">Copyright © 2025 Sehatful. All rights reserved</p>
      </div>
    </>
  );
}
