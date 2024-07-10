import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { frame11, nike, shoes, girl, watch, watchm, gown } from "../../images";

const Product = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center">
        <div className="text-xl">Order update</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-4 mt-10 flex-row  ">
        <div className="flex items-center space-x-4 border h-[7rem] w-[19rem]">
          <div>
            <img src={frame11} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={nike} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={shoes} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>{" "}
        <div></div>
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={girl} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>{" "}
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={watch} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={watchm} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 h-[7rem] w-[19rem]">
          <div>
            <img src={gown} alt="" />
          </div>
          <div>
            <p>Chrysallis</p>
            <p>Waiting for details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
