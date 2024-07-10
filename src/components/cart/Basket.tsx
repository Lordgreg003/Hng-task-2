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
      <div className="md:flex space-x-[5rem]">
        <div className=" md:flex md:flex-col lg:flex lg:flex-row lg:space-x-5">
          {" "}
          <div className="space-y-5 px-10  ">
            <h1 className="font-bold text-2xl">My basket</h1>
            <div className="lg:max-w-[30rem] md:max-w-[30rem]  max-w-[25rem]">
              <img src={cartsandals} alt="" />
            </div>
          </div>
          <div className="hidden  md:flex mt-10 space-y-4">
            <div>
              <h1>Reviews (10)</h1>
            </div>
            <div className="space-y-10">
              <div className="space-y-5 border p-4">
                <div className="w-[26rem]">
                  I love these heels so much. Even though I am not a fan of
                  heels, because of the comfort, these ones seem to differ. It’s
                  so comfortable on the feet and steady on the ground. Great
                  buy!
                </div>
                <div className="flex">
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStarHalfStroke />
                  </IconContext.Provider>
                </div>
                <p className="text-[#E1E0E0] text-2xl">Lindsay . Yesterday</p>
              </div>
              <div className="space-y-5 border p-4">
                <div className="w-[26rem]   h-[]">
                  Wore them to an event and got lots of compliments. Solid buy
                </div>
                <div className="flex">
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStarHalfStroke />
                  </IconContext.Provider>
                </div>
                <p className="text-[#E1E0E0] text-2xl">Lindsay . Yesterday</p>
              </div>
              <div className="space-y-5 border p-4">
                <div className="w-[26rem]   h-[]">
                  Perfect gift to gift your partner for valentine. So durable
                </div>
                <div className="flex">
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStarHalfStroke />
                  </IconContext.Provider>
                </div>
                <p className="text-[#E1E0E0] text-2xl">Lindsay . Yesterday</p>
              </div>
              <div className="space-y-5 border p-4">
                <div className="w-[26rem]   h-[]">
                  Comfortable to wear and a solid material{" "}
                </div>
                <div className="flex">
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStar />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ size: "1rem", color: "black" }}
                  >
                    <FaStarHalfStroke />
                  </IconContext.Provider>
                </div>
                <p className="text-[#E1E0E0] text-2xl">Lindsay . Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="-ml-16 md:-ml-0 lg:-ml-0   ">
            <h1 className="text-3xl">Mora’s Leather Sandals</h1>
            <div className="flex">
              <div className="*:inline-block">
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
              <div className="text-2xl">(146)</div>
            </div>
            <div className="space-y-5">
              <div className="border rounded-lg p-1 flex  md:w-[40rem] md:h-[5rem]">
                <div className="md:w-[30rem] h-[]">
                  <input
                    className=" md:h-[4rem] md:w-[35rem] text-2xl outline-none text-left"
                    type="text"
                    placeholder="Add address"
                  />
                </div>
              </div>
              <div className="border rounded-lg p-1 flex border-solid md:w-[40rem] md:h-[5rem]">
                <div className="md:w-[35rem] h-[]">
                  <input
                    className=" md:h-[4rem] md:w-[35rem] text-2xl outline-none text-left"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="flex items-center">
                  <div className="md:text-3xl">Xs</div>
                  <div className="md:-space-y-2">
                    <div className="md:w-[5rem] md:p-3">
                      <IconContext.Provider
                        value={{ size: "1rem", color: "black" }}
                      >
                        <FaChevronUp />
                      </IconContext.Provider>
                    </div>
                    <div className="md:w-[5rem] md:p-3">
                      <IconContext.Provider
                        value={{ size: "1rem", color: "black" }}
                      >
                        <FaChevronDown />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-1 flex border-solid  md:w-[40rem] md:h-[5rem]">
                <div className="md:w-[30rem] h-[]">
                  <input
                    className=" md:h-[4rem] md:w-[35rem] text-2xl outline-none text-left"
                    type="text"
                    placeholder="Color"
                  />
                </div>
                <div className="flex items-center w-[15rem]">
                  <div className="md:text-2xl  text-nowrap">Light gray</div>
                  <div className="-space-y-2">
                    <div className="md:w-[5rem] md:p-3">
                      <IconContext.Provider
                        value={{ size: "1rem", color: "black" }}
                      >
                        <FaChevronUp />
                      </IconContext.Provider>
                    </div>
                    <div className=" md:p-3">
                      <IconContext.Provider
                        value={{ size: "1rem", color: "black" }}
                      >
                        <FaChevronDown />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-1 border-solid flex  md:w-[40rem] md:h-[5rem]">
                <div className="md:w-[30rem] h-[]">
                  <input
                    className=" md:h-[4rem] md:w-[35rem] text-2xl outline-none text-left"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="flex items-center">
                  <div className="border rounded-full bg-[#D9D9D9] px-8 flex items-center">
                    <p className="md:text-4xl">-</p>
                    <p className="md:text-4xl">2</p>
                    <p className="md:text-4xl">+</p>
                  </div>
                </div>
              </div>
              <div className="text-3xl mx-3 p-5">
                <p>NGN40,000</p>
              </div>
              <div className="space-y-14">
                <div>
                  <Link
                    className="px-[9rem] py-5 md:px-[15rem] md:py-4 text-white bg-black text-3xl rounded-xl"
                    to={"/checkout"}
                  >
                    Checkout
                  </Link>
                </div>
                <div>
                  <Link
                    className="px-[8rem] py-5 md:px-[11rem] md:py-4 bg-[#D9D9D9] md:text-3xl rounded-xl"
                    to={"/"}
                  >
                    Continue shopping
                  </Link>
                </div>
                <div>
                  <Link
                    className="px-[10rem] py-5 md:px-[13rem] text-nowrap md:py-4 bg-[#D9D9D9] md:text-3xl rounded-xl"
                    to={"/"}
                  >
                    Refund policy
                  </Link>
                </div>
              </div>
              <div className="w-[39rem]  ">
                <div className="font-bold text-2xl p-3">Description</div>
                <div className="p-3">
                  It has a diamond stitch pattern and it is soft and light on
                  the skin for easy styling and comfort. Long-lasting and
                  resistant to peeling, scratchiness. Adds to your everyday
                  style
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
