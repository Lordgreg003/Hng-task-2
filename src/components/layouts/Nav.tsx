import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" h-[12rem]   md:p-5 w-full overflow-x-hidden overflow-y-hidden">
      <div className="max-w-3xl  md:mx-auto pt-10   px-4 sm:px-6 lg:px-8 ">
        <div className=" md:flex items-center justify-between h-16 space-y-3 md:space-y-0 lg:space-y-0 ">
          {/* First div with "Futura" */}
          <div className="flex-shrink-0 text-black text-2xl font-bold">
            Futura
          </div>

          {/* Second div with menu, search, and icons */}
          <div className="flex bg-re space-x-4 items-center">
            {/* Menu bar */}
            <div className="hidden  space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      !isOpen
                        ? "M4 6h16M4 12h16m-7 6h7"
                        : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Search bar */}
            <div className="flex items-center border bg-[#D9D9D9] rounded-md  py-1">
              <CiSearch className="text-black" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#D9D9D9] text-gray-300 focus:outline-none ml-2"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center md:space-x-4">
              <Link to={"/cart"}>
                <BsCart3 className="text-black text-2xl md:text-2xl" />
              </Link>
              <div className="hidden md:flex md:space-x-4">
                <Link to={"/"}>
                  {" "}
                  <FaHeart className="text-black text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white z-20 animate__fadeInRight    animate__animated animate__fadeInRight animate__slower rounded-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-[#D9D9D9]  font-bold hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="block text-[#D9D9D9] font-bold hover:text-white"
            >
              Add to cart
            </Link>
            <Link
              to="/checkout"
              className="block text-[#D9D9D9] font-bold hover:text-white"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
