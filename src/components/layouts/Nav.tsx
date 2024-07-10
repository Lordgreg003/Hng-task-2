import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

import { useRef } from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import "animate.css";
import "../../css/Style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const skrill = () => {
    openRef.current.className === "open hamburger focus:outline-none"
      ? (openRef.current.className = "hamburger focus:outline-none")
      : (openRef.current.className = "open hamburger focus:outline-none");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    console.log(openRef.current.className);
    console.log(flexRef.current.className);
    console.log(skrill);
    // console.log();
  };
  return (
    <nav className="mt-20 overflow-x-hidden ">
      <div className="flex space-x-6 px-5 md:px-0 lg:px-0">
        {" "}
        <div className="">
          {" "}
          <div className="flex pr-10 md:hidden ml-auto just bg-slate-600">
            <button
              onClick={skrill}
              id="menu-btn"
              ref={openRef}
              className="hamburger focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div ref={flexRef} className="hidden md:hidden">
            <div className="absolute z-20 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#202731] animate__fadeInRight   animate__animated animate__fadeInRight animate__slower sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white">
              <div>
                <Link to="/cart">Add to cart</Link>
              </div>
              <div>
                {" "}
                <Link to="/checkout ">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className="container items-center mx-auto flex  justify-between">
            <div className="hidden md:flex">
              <p className="text-3xl font-bold">Futura</p>
            </div>
            <div className="border h-20 w-0 rounded-lg p-1 flex bg-[#D9D9D9] md:w-[40rem] md:h-[5rem]">
              <div className=" md:w-[5rem] md:p-3">
                <IconContext.Provider value={{ size: "3rem", color: "black" }}>
                  <CiSearch />
                </IconContext.Provider>
              </div>
              <div className="md:w-[35rem] h-[]">
                <input
                  className="bg-[#D9D9D9] md:h-[4rem] md:w-[35rem] md:text-2xl outline-none text-left"
                  type="text"
                  placeholder="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:flex md:space-x-3 lg:space-x-5 ">
          <div className="hidden md:flex ">
            {" "}
            <IconContext.Provider value={{ size: "3rem", color: "black" }}>
              <FaHeart />
            </IconContext.Provider>
          </div>
          <div className="flex">
            <Link to={"/cart"}>
              {" "}
              <IconContext.Provider value={{ size: "3rem", color: "black" }}>
                <BsCart3 />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="border hidden md:flex rounded-full bg-[#D9D9D9] p-2">
            <p className="text-3xl">T</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
