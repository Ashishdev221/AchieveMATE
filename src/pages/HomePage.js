import { React, useEffect, useState } from "react";
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
import ParentComponent from "./ParentComponent";
import axios from "axios";

function HomePage() {
  //maintaining state for the three popovers
  const [popover1Visible, setPopover1Visible] = useState(false);
  const [popover2Visible, setPopover2Visible] = useState(false);
  const [popover3Visible, setPopover3Visible] = useState(false);
  const [userData, setUserData] = useState({});
  const [achievements, setAchievements] = useState({});

  const handlePopover1ButtonClick = () => {
    setPopover1Visible(false);
    setPopover2Visible(true);
  };

  const handlePopover2ButtonClick = () => {
    setPopover2Visible(false);
    setPopover3Visible(true);
  };

  const handlePopover3ButtonClick = () => {
    setPopover3Visible(false);
  };

  useEffect(() => {
    const fetchUserDataAndAchievements = async () => {
      try {
        const enrollement = 169;

        const [userDataResponse, achievementsResponse] = await Promise.all([
          axios.get(`http://127.0.0.1:5000/api/users/getUser/${enrollement}`),
          axios.get(`http://127.0.0.1:5000/api/achievements/all`),
        ]);

        const userData = userDataResponse.data;
        const achievements = achievementsResponse.data;

        setUserData({ name: userData.name, img: userData.img });
        setAchievements(achievements);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
      // console.log(achievements);
    };

    fetchUserDataAndAchievements();
  }, []);

  const enrollmentNumber = 169; // replace with actual enrollment number

  const requestBody = {
    user: "64562616d32a5cfd84028b86", // replace with actual user ID
    title: "Example Achievement",
    certifying_authority: "Example Authority",
    category: "Example Category",
    certificate_issue_date: "2022-01-01",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Findianexpress.com%2Farticle%2Fentertainment%2Fbollywood%2Fsunny-deol-nepotism-5317387%2F&psig=AOvVaw1TrMqm0oqMhiMoKBlKQ4E6&ust=1683911591206000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjnjNeD7_4CFQAAAAAdAAAAABAE",
    certificate_number: "ABC123",
    certificate_link: "https://example.com/certificate",
    description: "Example description",
    status: "pending",
  };
  function postApiCall() {
    axios
      .post(
        `http://127.0.0.1:5000/api/achievements/${enrollmentNumber}`,
        requestBody
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="home_page">
      <HeaderWhite />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Profile userData={userData} />
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
                // src="/passport-pic-2@2x.png"
                src={userData.img}
                alt=""
              />
              <h1 className="upload_heading">Upload Your Achievement</h1>
              <Button label="Upload" onClick={postApiCall} />
              {/* <button onClick={() => setPopover1Visible(!popover1Visible)}> */}
              <button onClick={() => setPopover1Visible(!popover1Visible)}>
                Upload
              </button>
              {popover1Visible && <ParentComponent></ParentComponent>}
            </div>
            {achievements.length > 0 ? (
              achievements.map((achievement) => (
                <Post
                  title={achievement.title}
                  university={achievement.university}
                  certificateNo={achievement.certificate_number}
                  link={achievement.certificate_link}
                  description={achievement.description}
                  img={achievement.img}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;