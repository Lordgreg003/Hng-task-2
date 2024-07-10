import React from "react";
import { cart1, cart2, cart3, cart4, cart5, cart6 } from "../../images";

const Similar = () => {
  return (
    <section className="container mx-auto space-y-5 mt-5">
      <div className="text-2xl">Similar Product</div>
      <div className=" lg:flex space-x-5">
        <div className="flex space-x-3">
          <div>
            <img src={cart1} alt="" />
          </div>
          <div>
            <img src={cart2} alt="" />
          </div>
          <div>
            <img src={cart3} alt="" />
          </div>
          <div>
            <img src={cart2} alt="" />
          </div>
        </div>
        <div className="flex space-x-3">
          <div>
            <img src={cart6} alt="" />
          </div>
          <div>
            <img src={cart5} alt="" />
          </div>
          <div>
            <img src={cart1} alt="" />
          </div>
          <div>
            <img src={cart4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Similar;
