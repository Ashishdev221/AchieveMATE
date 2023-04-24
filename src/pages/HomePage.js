import React from "react";
import "./HomePage.css";
import Profile from "../components/Profile";
import Post from "../components/Post";
import Achievers from "../components/Achievers";
import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HeaderWhite from "../components/HeaderWhite";
import ExploreCourse from "../components/ExploreCourse";

function HomePage() {
  return (
    <div className="home_page">
      <HeaderWhite />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Profile />
            <Achievers />
            <ExploreCourse />
          </div>
          <div className="col-8">
            <div className="home_page_banner flex-container">
              <div className="banner_left">
                <h1 className="banner_heading">
                  Showcase your First Achievement and{" "}
                  <span className="yellow_col">Earn Course Coins</span>
                </h1>
                <button type="button" class="btn btn-warning banner_button">
                  Upload now
                </button>
                <button
                  type="button"
                  class="btn btn-outline-warning banner_button"
                >
                  Explore Courses
                </button>
              </div>
              <img className="banner_img" src="/mask-group1.svg" alt="" />
            </div>
            <div className="upload flex-container">
              <img
                className="home_page_img"
                src="/passport-pic-2@2x.png"
                alt=""
              />
              <h1 className="upload_heading">Upload Your Achievement</h1>
              <Button label="Upload" />
            </div>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
