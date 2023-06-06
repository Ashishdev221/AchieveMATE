import React from "react";
import "./Profile.css";
import { Icon } from "@iconify/react";
import Button from "./Button";

function Profile({userData,achievementCount}) {
  console.log(userData,achievementCount)
  return (
    <div className="profile flex-container">
      <div className="profile_top">
        <img className="profile_img" src={userData.img} alt="profile" />
        <h3 className="profile_name">{userData.name}</h3>
        <p className="profile_para">{achievementCount} Achievements</p>
      </div>
      <div className="profile_bottom">
        <div className="flex-container" style={{justifyContent:'center'}}>
          <Icon icon="game-icons:graduate-cap" width="32" height="32" />
           <p className="profile_para">{userData.branch}</p> 
        </div>
        <div className="flex-container">
          <Icon icon="uis:calender" width="26" height="26" />
          <p className="profile_para">{userData.class}</p>
        </div>
        <div className="flex-container" style={{justifyContent:'center'}}>
        <Button label="My Dashboard" url="./user-dashboard"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
