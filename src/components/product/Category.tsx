import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa";

const Category = () => {
  return (
    <div className="container items-center mx-auto md:flex justify-center space-x-5 mt-8 hidden">
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Category</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Color</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Gender</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>On sale</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Price</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Rating</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Size</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
        <div>Sort by</div>
        <div>
          <IconContext.Provider value={{ size: "1rem", color: "black" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Category;
