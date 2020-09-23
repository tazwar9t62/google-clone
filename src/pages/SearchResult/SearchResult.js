import React from "react";
import { useStateValue } from "../../StateProvider";

const SearchResult = () => {
  const [{ term }, dispatch] = useStateValue();
  return (
    <div className="searchPage">
      <div className="searchPage_header"></div>
      <div className="searchPage_Result">
        <h1>hlw {term} </h1>
      </div>
    </div>
  );
};

export default SearchResult;
