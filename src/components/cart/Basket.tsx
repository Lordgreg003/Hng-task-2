import { cartsandals } from "../../images";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import { TiStarHalf } from "react-icons/ti";

const Basket = () => {
  return (
    <div className="container mx-auto overflow-x-hidden p-4">
      <div className="h-[5rem]  sm:h-[10rem]"></div>
      <div className="flex flex-col mx-auto overflow-x-hidden md:flex-row lg:space-x-4">
        <div className="flex flex-col overflow-x-hidden lg:flex-row lg:space-x-4 flex-1">
          <div className="flex-1 overflow-x-hidden space-y-5  p-4">
            <h1 className="font-bold text-2xl p-2">My basket</h1>
            <div className="overflow-x-hidden">
              <img src={cartsandals} alt="" />
            </div>
            <div className="h-auto">
              <h1 className="font-semibold text-xl">Mora’s Leather Sandals</h1>
              <div className="flex">
                <div className="flex text-xl">
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStar />
                  <TiStarHalf />
                </div>
                <div className="text-xl">(146)</div>
              </div>
            </div>
            <div className="text-4xl font-bold">NGN40,000</div>
          </div>
          <div className="flex-1 overflow-x-hidden overflow-y-hidden mx-auto space-y-5  p-4 hidden md:block">
            <h1>Reviews (10)</h1>
            <div className="border rounded-xl max-w-[29rem] space-y-5 p-5 border-black ">
              <div>
                I love these heels so much. Even though I am not a fan of heels,
                because of the comfort, these ones seem to differ. It’s so
                comfortable on the feet and steady on the ground. Great buy!
              </div>
              <div className="flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </div>
              <div>Lindsay . Yesterday</div>
            </div>
            <div className="border rounded-xl max-w-[29rem] space-y-5 p-5 border-black ">
              <div>
                Wore them to an event and got lots of compliments. Solid buy!
              </div>
              <div className="flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </div>
              <div>Lindsay . Yesterday</div>
            </div>{" "}
            <div className="border rounded-xl max-w-[29rem] space-y-5 p-5 border-black ">
              <div>
                Perfect gift to gift your partner for valentine. So durable
              </div>
              <div className="flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </div>
              <div>Lindsay . Yesterday</div>
            </div>{" "}
            <div className="border rounded-xl max-w-[29rem] space-y-5 p-5 border-black ">
              <div>Comfortable to wear and a solid material</div>
              <div className="flex">
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStar />
                <TiStarHalf />
              </div>
              <div>Lindsay . Yesterday</div>
            </div>{" "}
          </div>
        </div>
        <div className="flex-1 overflow-x-hidden  p-4 content-stretch">
          <div className="h-auto space-y-5">
            <h1 className="font-bold text-3xl ">Shop with us :</h1>
            <hr className="w-[20rem] border-black" />
            <div className="border-2 border-x-transparent border-t-transparent hover:border-b-[#702AB7] hover:border-b-8  flex items-center md:justify-evenly max-w-[40rem] border-black h-auto">
              <div>
                <input
                  className="max-w-[40rem] outline-none lg:text-3xl min-w-[18rem]  min-h-[5rem]"
                  type="text"
                  placeholder="size"
                />
              </div>
              <div className="flex space-x-2">
                <div className="font-bold text-xl">XS</div>
                <div>
                  <FaChevronUp />
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="border-2 border-x-transparent hover:border-b-[#702AB7] hover:border-b-8 border-t-transparent flex items-center md:justify-evenly max-w-[40rem] border-black h-auto">
              <div>
                <input
                  className="max-w-[40rem] outline-none lg:text-3xl items-stretch  min-w-[18rem] min-h-[5rem]"
                  type="text"
                  placeholder="Color"
                />
              </div>
              <div className="flex -space-x-1 md:space-x-2">
                <div className="font-bold text-xl items-stretch">
                  Light grey
                </div>
                <div className="items-stretch">
                  <FaChevronUp />
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className="border-2 hover:border-b-[#702AB7] hover:border-b-8 border-x-transparent border-t-transparent flex items-center md:justify-evenly max-w-[40rem] border-black h-auto">
              <div>
                <input
                  className="max-w-[40rem] outline-none lg:text-3xl  min-w-[18rem] min-h-[5rem]"
                  type="text"
                  placeholder="Quantity"
                />
              </div>
              <div className="flex space-x-2 items-stretch  border rounded-full bg-[#D9D9D9]  text-2xl max-w-24 ">
                <div>-</div>
                <div>2</div>
                <div>+</div>
              </div>
            </div>
            <div className="border-2 bg-black text-white flex items-center justify-center max-w-[40rem] border-black h-auto py-4 rounded-xl">
              <Link to={"/checkout"}>Checkout</Link>
            </div>
            <div className=" bg-[#D9D9D9] text-black flex items-center justify-center max-w-[40rem] border-black h-auto py-4 rounded-xl">
              <Link to={"/"}>Continue shopping</Link>
            </div>
            <div className=" bg-[#D9D9D9] text-black flex items-center justify-center max-w-[40rem] border-black h-auto py-4 rounded-xl">
              <Link to={"/"}>Refund policy</Link>
            </div>
            <div className="border rounded-xl max-w-[29rem] space-y-5 p-5 border-black ">
              <div>Description </div>
              <div className="">
                It has a diamond stitch pattern and it is soft and light on the
                skin for easy styling and comfort. Long-lasting and resistant to
                peeling, scratchiness. Adds to your everyday style.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
