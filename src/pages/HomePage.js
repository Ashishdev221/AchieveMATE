import { React, useContext, useEffect, useState } from "react";
import "./HomePage.css";
import Profile from "../components/Profile";
import Post from "../components/Post";
import Achievers from "../components/Achievers";
import HeaderWhite from "../components/HeaderWhite";
import ExploreCourse from "../components/ExploreCourse";
import axios from "axios";
import UploadModal from "../components/UploadModal";
import UserContext from "../contexts/UserContext";

function HomePage() {
  const { userInformation } = useContext(UserContext);
  //maintaining state for the three popovers
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({});
  const [achievements, setAchievements] = useState({});
  const [leaderBoard, setLeaderBoard] = useState({});

  const hideModalUpload = () => {
    setShowModal(false);
  };

  const showModalUpload = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const fetchUserDataAndAchievements = async () => {
      try {
        const enrollement = userInformation.enrollment;

        const [userDataResponse, achievementsResponse, leaderBoardResponse] =
          await Promise.all([
            axios.get(
              `http://127.0.0.1:5000/api/users/getUser/${encodeURIComponent(
                enrollement
              )}`
            ),
            axios.get(`http://127.0.0.1:5000/api/achievements/all`),
            axios.get(`http://127.0.0.1:5000/api/achievements/leaderBoard`),
          ]);

        const userData = userDataResponse.data;
        const achievements = achievementsResponse.data;
        const leaderBoard = leaderBoardResponse.data;

        setUserData({ name: userData.name, img: userData.img, branch: userData?.branch, class: userData?.class });
        setAchievements(achievements);
        setLeaderBoard(leaderBoard);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
      // console.log(achievements);
    };

    fetchUserDataAndAchievements();
  }, [userInformation]);

  if (userInformation && userInformation.role === "student") {
    return (
      <>
        <div className="home_page">
          <HeaderWhite showModalUpload={showModalUpload} />
          <div className="container">
            <div className="row">
              <div className="col-3">
                <Profile userData={userData} count={leaderBoard.achievements} />
                <Achievers
                  leaderBoardData={
                    leaderBoard.achievements === undefined
                      ? []
                      : leaderBoard.achievements
                  }
                />
                <ExploreCourse
                  leaderBoardData={
                    leaderBoard.achievements === undefined
                      ? []
                      : leaderBoard.achievements
                  }
                /> 
              </div>
              <div className="col-8">
                <div className="home_page_banner flex-container">
                  <div className="banner_left">
                    <h1 className="banner_heading">
                      Showcase your First Achievement and{" "}
                      <span className="yellow_col">Earn Course Coins</span>
                    </h1>
                    <button
                      type="button"
                      class="btn btn-warning banner_button"
                      onClick={showModalUpload}
                    >
                      Upload now
                    </button>
                    {/* <button
                      type="button"
                      class="btn btn-outline-warning banner_button"
                    >
                      Explore Courses
                    </button> */}
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
                  <button
                    type="button"
                    class="btn btn-warning banner_button"
                    onClick={showModalUpload}
                  >
                    Choose file
                  </button>
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
                      user={achievement.user}
                    />
                  ))
                ) : (
                  <p style={{textAlign: "center"}}>No Posts Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <UploadModal
            showModal={showModal}
            hideModalUpload={hideModalUpload}
          />
        </div>
      </>
    );
  }

  return <div>Unauthorized access</div>;
}

export default HomePage;
