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
    </section>
  );
};

export default Product;
