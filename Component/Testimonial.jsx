import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Srishita Kumar',
      image: 'https://i.pravatar.cc/100?img=5',
      feedback:
        'Pure, fresh, and trustworthy! Their organic products have transformed our meals. Highly recommend!',
    },
    {
      id: 2,
      name: 'Srishita Kumar',
      image: 'https://i.pravatar.cc/100?img=5',
      feedback:
        'Pure, fresh, and trustworthy! Their organic products have transformed our meals. Highly recommend!',
    },
  ];

  return (
    <div className="bg-[#FAFCF8] py-16 px-6 md:px-20 pb-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#4C5C3B] mb-2">
        Testimonials
      </h2>
      <p className=" mb-10 text-lg text-[#4d6042]">
        We Deliver Lifeline, Here's what people say
      </p>

      <div className="flex gap-8 flex-wrap">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-md p-8 flex flex-col  justify-between w-full md:w-[48%] hover:scale-105 transition-all"
          >
            <div className="flex justify-between items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D0E0CB"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M7.17 6A5.001 5.001 0 0 0 2 11v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4.08A3.001 3.001 0 0 1 7.17 6zm10 0A5.001 5.001 0 0 0 12 11v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-3.09A3.001 3.001 0 0 1 17.17 6z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D0E0CB"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm-1 15-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10Z" />
              </svg>
            </div>

            <p className="text-gray-800 text-base mt-4 mb-6 leading-relaxed">
              {item.feedback}
            </p>

            <div className="bg-[#E9F2E2] rounded-xl px-4 py-3 flex items-center gap-4 cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover "
              />
              <p className="font-semibold text-[#4C5C3B] text-md">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Buttons */}
      {/* <div className="flex justify-end mt-6 gap-4">
        <button className="bg-[#4C5C3B] text-white p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-[#4C5C3B] text-white p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Testimonials;
