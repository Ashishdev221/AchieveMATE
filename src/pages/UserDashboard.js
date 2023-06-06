import React,{useState,useEffect,useContext} from "react";
import "./UserDashboard.css";
import HeaderWhite from "../components/HeaderWhite";
import Post from "../components/Post";
import Achievers from "../components/Achievers";
import ExploreCourse from "../components/ExploreCourse";
import Footer from "../components/Footer";
import MyDashboard from "../components/MyDashboard";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function UserDashboard() {
  const [leaderBoard, setLeaderBoard] = useState({});
  const [userData, setUserData] = useState({});
  const { userInformation } = useContext(UserContext);
  useEffect(() => {
    const fetchUserDataAndAchievements = async () => {
      try {
        const enrollement = userInformation.enrollment;

        const [userDataResponse, leaderBoardResponse] =
          await Promise.all([
            axios.get(
              `http://127.0.0.1:5000/api/users/getUser/${encodeURIComponent(
                enrollement
              )}`
            ),
            axios.get(`http://127.0.0.1:5000/api/achievements/leaderBoard`),
          ]);

        const userData = userDataResponse.data;
        const leaderBoard = leaderBoardResponse.data;

        setUserData({
          name: userData.name,
          img: userData.img,
          branch: userData?.branch,
          class: userData?.class,
        });
        setLeaderBoard(leaderBoard);
        setAchievmentObject(
          leaderBoard.achievements.find(
            (item) => item.user.name === userData.name
          )
        );
        console.log(
          leaderBoard.achievements,
          userData,
          achievementObject,
          "llll"
        );
      } catch (error) {
        console.error(error);
        // Handle error here
      }
      // console.log(achievements);
    };

    fetchUserDataAndAchievements();
  }, [userInformation]);

  return (
    <div className="user_dashboard">
      <HeaderWhite />
      <div className="contaier" style={{marginTop:'100px'}}>
        <div className="row">
          <div className="col-8 mx-5">
          <MyDashboard />
          </div>
          <div className="col-3">
           
          <Achievers
                  userData={userData}
                  leaderBoardData={
                    leaderBoard.achievements === undefined
                      ? []
                      : leaderBoard.achievements
                  }
                />
                <ExploreCourse
                 userData={userData}
                  leaderBoardData={
                    leaderBoard.achievements === undefined
                      ? []
                      : leaderBoard.achievements
                  }
                />
          </div>
        </div>
      </div>
      <Footer first='Refer your friend' second='and earn course coins' button='Refer Now'/>
    </div>
  );
}

export default UserDashboard;
