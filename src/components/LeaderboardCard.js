import React from "react";
import "./LeaderboardCard.css";

function LeaderboardCard() {
  return (
    <div className="leaderboardCard container flex-container">
      <img className="home_page_img" src="/passport-pic-2@2x.png" alt="" />
      <div className="leaderboardCard_info container">
        <h4 className="leaderboardCard_heading">Sourabh Purbia</h4>
        <p className="leaderboardCard_para">100 Achievements</p>
      </div>
      <img className="home_page_img" src="1-1@2x.png" alt="" />
      {/* <p>4</p> */}
    </div>
  );
}

export default LeaderboardCard;
