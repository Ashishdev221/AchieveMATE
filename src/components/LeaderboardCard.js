import React from "react";
import "./LeaderboardCard.css";

function LeaderboardCard(props) {
  return (
    <div className="leaderboardCard container flex-container">
      <img
        className="home_page_img"
        src={props.image ? props.image : "/passport-pic-2@2x.png"}
        alt=""
      />
      <div className="leaderboardCard_info container">
        <h4 className="leaderboardCard_heading">{props.name}</h4>
        <p className="leaderboardCard_para">{props.count} Achievements</p>
        {/* <p className="leaderboardCard_para">Posted 4 days ago</p>  */}
      </div>
      {props.badgeImage && <img className="home_page_img" src={props.badgeImage} alt="" />}
       <p>{props.icon}</p>
    </div>
  );
}

export default LeaderboardCard;
