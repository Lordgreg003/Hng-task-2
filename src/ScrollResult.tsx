import React from "react";
import { Link } from "react-router-dom";

export interface ScrollItem {
  id: number;
  name: string;
  to: string;
}

interface ScrollItemProps {
  scrollResults: ScrollItem[];
  closeMenu: () => void;
}

const scrollResults: React.FC<ScrollItemProps> = ({
  scrollResults,
  closeMenu,
}) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-black z-10">
      {scrollResults.length > 0 ? (
        scrollResults.map((result) => (
          <div key={result.id} className="px-4 py-2 text-black">
            <Link to={result.to} onClick={closeMenu}>
              {result.name}
            </Link>
          </div>
        ))
      ) : (
        <p className="px-4 py-2 text-black">No results found</p>
      )}
    </div>
  );
};

export default scrollResults;
console.log(scrollResults);
