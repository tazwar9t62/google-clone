import React from "react";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";

const SearchResult = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // console.log(data);
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
