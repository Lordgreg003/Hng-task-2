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
import { coverT } from "../../data";

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

      <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden">
        <h1 className="font-bold text-2xl mb-4">Featured Products</h1>
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
