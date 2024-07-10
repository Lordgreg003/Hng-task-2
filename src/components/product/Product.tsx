import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { Updatedata } from "../../data/index";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="container mx-auto -space-y-5">
      <div className="flex items-center">
        <div className="text-xl font-bold">Order update</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>
      <section className="container mx-auto  overflow-x-auto overflow-y-hidden lg:overflow-x-hidden">
        <div className="flex space-x-4 md:space-x-2">
          {Updatedata.map((image) => (
            <div key={image.id} className="  my-5">
              <div className="  flex my-7 p-6">
                <div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg max-w-[20rem] md:max-w-[15rem] sm:max-w-[10rem]"
                  />
                </div>
                <div className="space-x-5 pt-5">
                  <div className="w-[10rem] text-2xl px-6 ">{image.about}</div>
                  <div className="w-[10rem] text-xl text-nowrap">
                    {image.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Product;
