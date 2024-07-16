import React, { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import getProducts from "../../data/alsoImage";
import "../../css/Style.css";

const Alsolike = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState<string | null>(null);

  // // useEffect(() => {
  // // const fetchProducts = async () => {
  // //   try {
  // //     const data = await getProducts();
  // //     setProducts(data.products);
  // //   } catch (err) {
  // //     setError("Failed to fetch products");
  // //   }
  // // };
  // // fetchProducts();
  // getProducts();
  // // }, []);

  return (
    <section
      className="container  h-[22rem] py-8 relative mx-auto mt-10 scroll-smooth overflow-x-auto overflow-y-hidden  scrollbar-hide"
      id="recently"
    >
      <div className="flex items-center">
        <div className="text-xl font-bold">Recently reviewed</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <Link to={"/cart"}>
            <IconContext.Provider value={{ size: "1rem", color: "black" }}>
              <MdNavigateNext />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
      <div className="flex mt-5 space-x-4 md:space-x-2">
        {getProducts.map((image) => (
          <div key={image.id} className="flex-none space-x-5">
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
            <div className="mt-6 mb-10">
              <Link
                to="/cart"
                className="px-2 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black text-lg"
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

export default Alsolike;
