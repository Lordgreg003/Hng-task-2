import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  perfume,
  perfume2,
  perfume3,
  perfume4,
  perfume5,
  perfume6,
  perfume7,
  perfume8,
} from "../../images";

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
      <div className="flex space-x-5">
        <div className="space-y-3">
          <div>
            <img src={perfume} alt="" />
          </div>
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <img src={perfume2} alt="" />
          </div>
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume3} alt="" />
          </div>
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume4} alt="" />
          </div>{" "}
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume5} alt="" />
          </div>{" "}
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume6} alt="" />
          </div>{" "}
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume7} alt="" />
          </div>{" "}
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <img src={perfume8} alt="" />
          </div>{" "}
          <div>
            <p>Chanel </p>
            <p>4.4 * N460,000</p>
          </div>
          <div>
            <button className="bg-black px-[5rem] py-4 text-white rounded-xl">
              Follow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
