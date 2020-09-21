import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Searchbar.css";
import { Button } from "@material-ui/core";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input type="text" />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Searchbar;
