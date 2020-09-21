import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

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
            <Avatar />
          </div>
        </div>
        <div className="home_body"></div>
      </div>
    </>
  );
};

export default Home;
