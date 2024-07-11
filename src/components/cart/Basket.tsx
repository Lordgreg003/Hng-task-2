import { FaStar } from "react-icons/fa6";
import { cartsandals } from "../../images";
import { IconContext } from "react-icons";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaStarHalfStroke } from "react-icons/fa6";

const Basket = () => {
  return (
    <section className="container mx-auto mt-10 overflow-x-hidden">
      <div className="md:flex  px-5  md:space-x-[5rem]">
        <div className="md:flex md:flex-col   lg:flex lg:flex-row lg:space-x-5">
          <div className="space-y-5 px-10">
            <h1 className="font-bold text-2xl">My basket</h1>
            <div className="lg:max-w-[30rem] md:max-w-[30rem] max-w-[25rem]">
              <img src={cartsandals} alt="" />
            </div>
          </div>
          <div className="hidden md:flex mt-10 space-y-4">
            <div>
              <h1>Reviews (10)</h1>
            </div>
            <div className="space-y-10">
              {[
                "I love these heels so much. Even though I am not a fan of heels, because of the comfort, these ones seem to differ. It’s so comfortable on the feet and steady on the ground. Great buy!",
                "Wore them to an event and got lots of compliments. Solid buy",
                "Perfect gift to gift your partner for valentine. So durable",
                "Comfortable to wear and a solid material",
              ].map((review, index) => (
                <div className="space-y-5 border p-4" key={index}>
                  <div className="w-[26rem]">{review}</div>
                  <div className="flex">
                    <div className="text-black text-1rem">
                      <FaStar />
                    </div>
                    <div className="text-black text-1rem">
                      <FaStar />
                    </div>
                    <div className="text-black text-1rem">
                      <FaStar />
                    </div>
                    <div className="text-black text-1rem">
                      <FaStar />
                    </div>
                    <div className="text-black text-1rem">
                      <FaStarHalfStroke />
                    </div>
                  </div>
                  <p className="text-[#E1E0E0] text-2xl">Lindsay . Yesterday</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl mb-4">Mora’s Leather Sandals</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaStar />
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaStar />
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaStar />
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaStar />
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaStarHalfStroke />
              </IconContext.Provider>
            </div>
            <div className="text-2xl ml-2">(146)</div>
          </div>
          <div className="space-y-5">
            <div className="border rounded-lg p-2 flex md:w-[40rem]">
              <input
                className="flex-grow h-[4rem] text-2xl outline-none"
                type="text"
                placeholder="Add address"
              />
            </div>
            <div className="border rounded-lg p-2 flex items-center md:w-[40rem]">
              <input
                className="flex-grow h-[4rem] text-2xl outline-none"
                type="text"
                placeholder="Search"
              />
              <div className="flex items-center md:ml-4">
                <div className="text-3xl">Xs</div>
                <div className="ml-2">
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaChevronUp />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaChevronDown />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 flex items-center md:w-[40rem]">
              <input
                className="flex-grow h-[4rem] text-2xl outline-none"
                type="text"
                placeholder="Color"
              />
              <div className="flex items-center md:ml-4">
                <div className="md:text-2xl">Light gray</div>
                <div className="ml-2">
                  <div>
                    {" "}
                    <FaChevronUp />
                  </div>{" "}
                  <div>
                    {" "}
                    <FaChevronDown />{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 flex items-center md:w-[40rem]">
              <input
                className="flex-grow h-[4rem] text-2xl outline-none"
                type="text"
                placeholder="Quantity"
              />
              <div className="flex items-center ml-1 md:ml-4">
                <div className="border rounded-full p-2 bg-gray-200 md:px-4 flex items-center">
                  <p className="text-4xl">-</p>
                  <p className="md:text-4xl text-2xl ">2</p>
                  <p className="text-4xl">+</p>
                </div>
              </div>
            </div>
            <div className="text-3xl mx-3 p-5">
              <p>NGN40,000</p>
            </div>
            <div className="space-y-4">
              <Link
                className="block px-16 py-5 text-white bg-black text-3xl rounded-xl text-center"
                to="/checkout"
              >
                Checkout
              </Link>
              <Link
                className="block px-16 py-5 bg-gray-200 text-3xl rounded-xl text-center"
                to="/"
              >
                Continue shopping
              </Link>
              <Link
                className="block px-16 py-5 bg-gray-200 text-3xl rounded-xl text-center"
                to="/"
              >
                Refund policy
              </Link>
            </div>
            <div className="w-full md:w-[40rem] mt-8">
              <div className="font-bold text-2xl p-3">Description</div>
              <div className="p-3">
                It has a diamond stitch pattern and it is soft and light on the
                skin for easy styling and comfort. Long-lasting and resistant to
                peeling, scratchiness. Adds to your everyday style.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
