// SearchResults.tsx

import React from "react";
import { Link } from "react-router-dom";

// types.ts
export interface Item {
  id: number;
  name: string;
  path: string;
}

export interface ScrollItem {
  id: number;
  name: string;
  to: string;
}

interface SearchResultsProps {
  searchResults: Item[];
  closeMenu: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  closeMenu,
}) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-black z-10">
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.id} className="px-4 py-2 text-black">
            <Link to={result.path} onClick={closeMenu}>
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

export default SearchResults;
