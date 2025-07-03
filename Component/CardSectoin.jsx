import React from "react";
import { MdAddShoppingCart } from "react-icons/md";


const products = [
  {
    name: "Aloo Paratha",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/WFgUJdtVDH-1745315742415.jpeg",
    rating: 1.0,
    price: "₹30",
  },
  {
    name: "Plain Lassi",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/V33qFuPeds-1745317250314.jpeg",
    rating: 3.0,
    price: "₹25",
  },
  {
    name: "Veg Club Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/vV8oxMG8ZW-1745327241256.jpg",
    rating: 4.0,
    price: "₹40",
  },
  {
    name: "Paneer Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/by0AN3yJP5-1745327799844.jpg",
    rating: 4.0,
    price: "₹45",
  },
   {
    name: "Aloo Paratha",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/hVw9d6Myux-1745328202053.jpg",
    rating: 1.0,
    price: "₹30",
  },
  {
    name: "Plain Lassi",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/MFNtqtVk1w-1745328482983.jpg",
    rating: 3.0,
    price: "₹25",
  },
  {
    name: "Veg Club Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-05-01/nTea0OSUBc-1746095559421.png",
    rating: 4.0,
    price: "₹40",
  },
  {
    name: "Paneer Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-05-01/nTea0OSUBc-1746095559421.png",
    rating: 4.0,
    price: "₹45",
  },
  {
    name: "Veg Club Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/hVw9d6Myux-1745328202053.jpg",
    rating: 4.0,
    price: "₹40",
  },
  {
    name: "Paneer Sandwich",
    image: "https://sehatful.s3.ap-south-1.amazonaws.com/sehatfull-assets/product/2025-04-22/V33qFuPeds-1745317250314.jpeg",
    rating: 4.0,
    price: "₹45",
  },
];

const RecentlyPurchased = () => {
  return (
    <div className="bg-[#f7f8f1] py-10 px-6 ">
      <div className="mx-auto w-full">
        <h2 className=" font-bold text-[#3e4b2c] mb-1 text-4xl pl-5">Recently Purchased</h2>
        <p className="text-[#5a6a40] mb-6 text-2xl pl-5">People are buying frequently</p>

        <div className="flex flex-wrap space-x-6 gap-20 overflow-x-auto justify-center scrollbar-hide pb-2">
          {products.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[420px] bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[280px] w-full object-cover rounded-t-3xl"
                />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#e3edd8] text-[#3b4b2a] px-3 py-1 text-sm font-semibold rounded-b-full ">
                  Newly launched
                </div>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-center font-bold text-[#2f3f20] mb-2 text-xl ">{item.name}</h3>
                <div className="flex justify-between text-sm text-[#5d5d5d] font-semibold">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="text-lg font-semibold ">{item.rating}</span>
                  </div>
                  <div className="text-[#3b3b3b] font-bold text-lg">Rs : {item.price}</div>
                  <div className="pt- flex justify-center items-center text-xl bg-[#5D6D56] p-2 m-2 rounded-full text-white "><MdAddShoppingCart />+ Cart</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPurchased;
