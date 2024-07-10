import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { alsoImage } from "../../data/index";
import { Link } from "react-router-dom";

const Alsolike = () => {
  return (
    <section className="container mx-auto space-y-5 mt-5">
      <div className="flex items-center">
        <div className="text-xl">You might also like</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>
      <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden">
        <h1 className="font-bold text-2xl mb-4">Featured Products</h1>
        <div className="flex space-x-4 md:space-x-2">
          {alsoImage.map((image) => (
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

export default Alsolike;
