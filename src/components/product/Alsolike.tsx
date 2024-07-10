import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  cloths,
  frame24,
  frame25,
  fynboi,
  fynboi1,
  fyngal,
  fyngal2,
  fyngal3,
} from "../../images";

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
      <div className="flex space-x-5 ">
        <div>
          <img src={frame24} alt="" />
        </div>
        <div>
          <img src={frame25} alt="" />
        </div>
        <div>
          <img src={fyngal} alt="" />
        </div>
        <div>
          <img src={fyngal} alt="" />
        </div>
        <div>
          <img src={fyngal2} alt="" />
        </div>
        <div>
          <img src={cloths} alt="" />
        </div>
        <div>
          <img src={fynboi} alt="" />
        </div>
        <div>
          <img src={fyngal3} alt="" />
        </div>
        <div>
          <img src={fynboi1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Alsolike;
