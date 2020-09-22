import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Searchbar.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Searchbar = ({ hiddenButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    // console.log("yo yo ", input);
    history.push("/search");
  };
  // console.log(input);
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="searchIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />

        <MicIcon />
      </div>
      {!hiddenButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="hide_search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Searchbar;
