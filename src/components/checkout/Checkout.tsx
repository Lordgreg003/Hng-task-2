import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa";
import { cartsandals, sandal } from "../../images/index";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className="container mx-auto mt-10 ">
      <div className=" lg:flex">
        <div className="w-1/2 md:flex space-x-5 my-10">
          <div className="lg:max-w-[30rem] md:max-w-[30rem]  max-w-[25rem]">
            <img className="w-[20rem]" src={cartsandals} alt="" />
          </div>
          <div className="space-y-10">
            <h1 className="font-bold text-3xl">Mora’s Leather Sandals</h1>
            <div className="flex space-x-20 text-2xl">
              <div>Subtotal</div>
              <div>N40,000</div>
            </div>
            <div className="flex space-x-20 text-2xl">
              <div>Shipping</div>
              <div>N2,000</div>
            </div>
            <div className="flex space-x-20 text-2xl">
              <div>Total (2 items)</div>
              <div>N42,000</div>
            </div>
            <div>
              <Link
                className="text-white bg-black px-[10rem] py-6 rounded-xl"
                to={"/cart"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-5">
          <div>
            <div>Your details</div>
            <div className="p-4">
              <input
                type="text"
                className="h-12 w-[30rem] border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"
                placeholder="Danielnsikak@gmail.com"
              />
            </div>
          </div>

          <div className="border rounded-lg p-1 flex items-center  md:w-[40rem] md:h-[5rem]">
            <div className="md:w-[35rem] h-[]">
              <input
                className=" h-[4rem] w-[35rem] text-2xl outline-none text-left"
                type="text"
                placeholder="Add address"
              />
            </div>
            <IconContext.Provider value={{ size: "1rem", color: "black" }}>
              <FaChevronDown />
            </IconContext.Provider>
          </div>
          <div className="flex space-x-7">
            <div className="space-y-3 p-3 border w-[19rem] rounded-xl">
              <p>First name</p>
              <p>Daniel</p>
            </div>
            <div className="space-y-3 p-3 border w-[19rem] rounded-xl">
              <p>Last name</p>
              <p>Nsikak</p>
            </div>
          </div>
          <div className="flex space-x-7">
            <div className="space-y-3 flex items-center space-x-3 p-3 border w-[10rem] rounded-xl">
              <div>
                <p>City</p>
                <p>Port Harcourt</p>
              </div>
              <div>
                {" "}
                <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                  <FaChevronDown />
                </IconContext.Provider>
              </div>
            </div>
            <div className="space-y-3 p-3 flex items-center space-x-3 border w-[10rem] rounded-xl">
              <div>
                <p>State</p>
                <p>River State</p>
              </div>
              <div>
                {" "}
                <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                  <FaChevronDown />
                </IconContext.Provider>
              </div>
            </div>
            <div className="space-y-3 p-3 items-center space-x-3 border w-[10rem] flex rounded-xl">
              <div>
                <p>Zip code</p>
                <p>12345</p>
              </div>
              <div>
                <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                  <FaChevronDown />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>Address</div>
            <div className="border rounded-lg p-1 flex items-center  md:w-[40rem] md:h-[5rem]">
              <div className="md:w-[35rem] h-[]">
                <input
                  className=" h-[4rem] w-[35rem] text-2xl outline-none text-left"
                  type="text"
                  placeholder="5 Gra Road, Akwaibom State"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl">Payment</div>
            <div>All transactions are secure and encrypted</div>
          </div>
          <div className="space-y-4">
            <div>Card number</div>
            <div className="border rounded-lg p-1 flex items-center  md:w-[40rem] md:h-[5rem]">
              <div className="md:w-[35rem] h-[]">
                <input
                  className=" h-[4rem] w-[35rem] text-2xl outline-none text-left"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-8 ">
            <div>
              <div>cvv</div>
              <div className="border h-[3rem] w-[5rem]">
                <input
                  className="outline-none text-center h-[3rem] w-[5rem]"
                  type="text"
                  placeholder="123"
                />
              </div>
            </div>
            <div>
              <div>Valid until</div>
              <div className="border h-[3rem] w-[5rem]">
                <input
                  className="outline-none text-center h-[3rem] w-[5rem]"
                  type="text"
                  placeholder="05/25"
                />
              </div>
            </div>
            <div>
              <div>Zip Code</div>
              <div className="border h-[3rem] w-[5rem]">
                <input
                  className="outline-none text-center h-[3rem] w-[5rem]"
                  type="text"
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
