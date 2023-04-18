import React from "react";
import "./Profile.css";
import { Icon } from "@iconify/react";
import Button from "./Button";
function Profile() {
  return (
    <div className="profile">
      <div className="profile_top">
        <img className="profile_img" src="/mask-group@2x.png" alt="" />
        <h3 className="profile_name">Sourabh Purbia</h3>
        <p className="profile_para">0 Achievements</p>
      </div>
      <div className="profile_bottom">
        <div className="flex-container">
          <Icon icon="game-icons:graduate-cap" width="32" height="32" />
          <p className="profile_para">Computer Science <br /> and engineering</p>
        </div>
        <div className="flex-container">
          <Icon icon="uis:calender" width="26" height="26" />
          <p className="profile_para">B.Tech, 4th Year</p>
        </div>
        <Button name="My Dashboard"/>
      </div>
    </div>
  );
}

export default Profile;
