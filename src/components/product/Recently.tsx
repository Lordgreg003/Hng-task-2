import {
  belt,
  belts,
  cap,
  frame9,
  frame999,
  gown1,
  gown2,
  handsome,
  image2,
  image3,
  sandal,
  shoe3,
} from "../../images";
import { IconContext } from "react-icons";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const Recently = () => {
  return (
    <section className="container mx-auto space-y-5 mt-5">
      <div className="flex items-center">
        <div className="text-xl">Recently viewed</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-5">
        <div>
          <img src={frame9} alt="" />
          <Link className="" to={"/cart"}>
            Add to cart
          </Link>
        </div>
        <div>
          <img src={sandal} alt="" />
        </div>
        <div>
          <img src={cap} alt="" />
        </div>
        <div>
          <img src={handsome} alt="" />
        </div>
        <div>
          <img src={gown1} alt="" />
        </div>
        <div>
          <img src={belts} alt="" />
        </div>
        <div>
          <img src={frame999} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={gown2} alt="" />
        </div>
        <div>
          <img src={belt} alt="" />
        </div>
        <div>
          <img src={shoe3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Recently;
