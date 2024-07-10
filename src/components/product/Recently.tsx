import React from "react";
import { Link } from "react-router-dom";
import { imageProduct } from "../../data/index"; // Assuming this is where your image data is stored

const HomeScreen: React.FC = () => {
  return (
    <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden">
      <h1 className="font-bold text-2xl mb-4">Featured Products</h1>
      <div className="flex space-x-4 md:space-x-2">
        {imageProduct.map((image) => (
          <div key={image.id} className="flex-none">
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
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/cart"
          className="px-4 py-2 bg-gray-800 text-white rounded-md text-lg"
        >
          Add to cart{" "}
        </Link>
      </div>
    </section>
  );
};

export default HomeScreen;
