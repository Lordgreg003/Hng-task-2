import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { cartsandals, sandal, verve } from "../../images/index";
import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import { TiStarHalf } from "react-icons/ti";

const Checkout = () => {
  return (
    <section className="">
      <div className=" h-[5rem] sm:h-[10rem]"></div>
      <div className="container lg-flex bg-slate-600 mx-auto p-4">
        {/* Main div */}
        <div className="flex flex-col bg-orange-600 lg:flex-row">
          {/* First div */}
          <div
            className="flex flex-col lg:flex-row w-full lg:w-1/2 p-2"
            id="first-div"
          >
            <div className="sm:flex bg-green-600 flex-row w-full">
              <div className="w-1/2 bg-blue-700 p-2">
                <img
                  src={cartsandals}
                  alt="sandals"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-1/2 bg-purple-600 p-2">
                <h1>Mora’s Leather Sandals</h1>
                <div className="justify-between flex">
                  <div>Subtotal</div>
                  <div>N40,000</div>
                </div>
                <div className="justify-between flex">
                  <div>Shipping</div>
                  <div>N2,000</div>
                </div>
                <div className="justify-between flex">
                  <div>Total (2 items)</div>
                  <div>N42,000</div>
                </div>
                <div className=" flex">
                  <div>
                    <img src={verve} alt="" />
                  </div>
                  <div>Payment method</div>
                </div>
                <div className=" bg-black text-white flex items-center justify-center max-w-[40rem] border-black h-auto py-4 rounded-xl">
                  <Link to={"/"}>Refund policy</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Second div */}
          <div
            className="flex flex-col bg-pink-900 lg:flex-row w-full lg:w-1/2 p-2 mt-4 lg:mt-0"
            id="second-div"
          >
            {/* Empty div for your content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
