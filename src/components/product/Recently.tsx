import React from "react";
import { Link } from "react-router-dom";
import { imageProduct } from "../../data/index"; // Assuming this is where your image data is stored
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";

const HomeScreen: React.FC = () => {
  return (
    <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden">
      <div className="flex items-center">
        <div className="text-xl font-bold">Recently reviewed</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-2">
        {imageProduct.map((image) => (
          <div key={image.id} className="flex-none space-x-7">
            <div>
              <Link
                to={`/product/${image.id}`}
                className="block rounded-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-lg"
                />
              </Link>
            </div>
            <div className="mt-6">
        <Link
          to="/cart"
          className="px-4 py-2 bg-black text-white rounded-md text-lg"
        >
          Add to cart{" "}
        </Link>
      </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default HomeScreen;
