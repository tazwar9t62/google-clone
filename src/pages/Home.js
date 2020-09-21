import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Searchbar from "../components/Searchbar/Searchbar";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_header">
          <div className="header_left">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <div className="header_right">
            <Link to="gmail">Gmail</Link>
            <Link to="images">Images</Link>
            <AppsIcon />
            <Avatar src="https://www.wkrn.com/wp-content/uploads/sites/73/2019/02/Trump_US_China_61726_74318831_ver1.0.jpg?w=2560&h=1440&crop=1" />
          </div>
        </div>
        <div className="home_body">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />
          <div className="searchbar">
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
