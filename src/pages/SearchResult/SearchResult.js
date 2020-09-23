import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./SearchResult.css";

const SearchResult = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_header_image"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage_header_body">
          <Searchbar hiddenButtons />
        </div>
        
        <div className="searchPage_option">
          <div className="searchPage_option_left">
            <div className="searchPage_single_option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage_single_option">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage_single_option">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage_single_option">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage_single_option">
              <RoomIcon />
              <Link to="/maps">maps</Link>
            </div>
            <div className="searchPage_single_option">
              <MoreVertIcon />
              <Link to="/more">more</Link>
            </div>
          </div>
          <div className="searchPage_option_right">
            <div className="searchPage_single_option">
              <Link to="/setting">Setting</Link>
            </div>
            <div className="searchPage_single_option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage_Result">
        <h1>hlw {term} </h1>
      </div>
    </div>
  );
};

export default SearchResult;
