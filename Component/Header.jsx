import { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { FaCartPlus, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50 rounded-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://sehatful.com/static/media/logobig.4afa453b38dfdfe84e31.png"
            alt="Sehatful Logo"
            className="w-40 h-12 object-contain"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center ml-auto pr-8">
          <Link
            to="/"
            className="text-[#2f3d1f] hover:underline flex items-center gap-1 text-xl font-semibold"
          >
            <IoHomeSharp /> Home
          </Link>
          <Link
            to="/order"
            className="text-[#2f3d1f] hover:underline flex items-center gap-1 text-xl font-semibold"
          >
            <LiaJediOrder /> Order
          </Link>
          <Link
            to="/cart"
            className="text-[#2f3d1f] hover:underline flex items-center gap-1 text-xl font-semibold"
          >
            <FaCartPlus /> Cart
          </Link>
        </div>

        {/* Search bar + Login */}
        <div className="hidden md:flex items-center space-x-4 gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search items"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none ring-[#c5d5c5]"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button className="flex items-center bg-[#5D6D56] text-white px-4 py-1.5 rounded-full hover:bg-[#3d4f2d] cursor-pointer w-30 h-10">
            <FaUserCircle className="mr-2 text-lg" />
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Popup Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
          <div className="w-64 h-full bg-white p-6 shadow-lg relative">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav Items */}
            <ul className="mt-12 space-y-6 text-gray-700 text-lg font-medium">
              <li onClick={() => setIsMenuOpen(false)}>
                <Link to="/" className="flex items-center gap-2 hover:text-blue-600">
                  <IoHomeSharp /> Home
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link to="/order" className="flex items-center gap-2 hover:text-blue-600">
                  <LiaJediOrder /> Order
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link to="/cart" className="flex items-center gap-2 hover:text-blue-600">
                  <FaCartPlus /> Cart
                </Link>
              </li>
              <li className="mt-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search items"
                    className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100 text-sm outline-none ring-[#c5d5c5]"
                  />
                  <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
                </div>
              </li>
              <li className="mt-4">
                <button className="flex items-center bg-[#5D6D56] text-white px-4 py-2 rounded-full hover:bg-[#3d4f2d] w-full">
                  <FaUserCircle className="mr-2 text-lg" />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
