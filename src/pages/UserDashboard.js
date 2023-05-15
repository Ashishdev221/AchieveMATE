import React from "react";
import "./UserDashboard.css";
import HeaderWhite from "../components/HeaderWhite";
import Post from "../components/Post";
import Achievers from "../components/Achievers";
import ExploreCourse from "../components/ExploreCourse";
import Footer from "../components/Footer";
import MyDashboard from "../components/MyDashboard";

function UserDashboard() {
  return (
    <div className="user_dashboard">
      <HeaderWhite />
      <div className="contaier">
        <div className="row">
          <div className="col-8 mx-5">
          <MyDashboard />
          </div>
          <div className="col-3">
           
            <Achievers leaderBoardData={[]}/>
             <ExploreCourse leaderBoardData={[]}/> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
