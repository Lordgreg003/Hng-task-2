import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { coverT } from "../../data";
import "../../css/Style.css"; // Import the custom CSS file

const Discover = () => {
  return (
    <section className="container mx-auto space-y-5 mt-5">
      <div className="flex items-center">
        <div className="text-xl">Discover new brands</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>

      <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex space-x-4 md:space-x-2">
          {coverT.map((image) => (
            <div key={image.id} className="flex-none">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg max-w-[20rem] md:max-w-[15rem] sm:max-w-[10rem]"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Discover;
