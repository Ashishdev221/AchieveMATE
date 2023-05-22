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
        {props.name !== "Mrs. Kalpana Jain" && (
          <p className="leaderboardCard_para">{props.count} Achievements</p>
        )}
        <p className="leaderboardCard_para">{props.category}</p>
        <p className="leaderboardCard_para">{props.branch}</p>
      </div>
      {props.index <=2 && props.badgeImage && (
        <img className="home_page_img" src={props.badgeImage} alt="" />
      )}
      {props.index > 2 && <h3 style={{marginRight:'20px'}}>{props.index+1}</h3>}
      <p>{props.icon}</p>
    </div>
  );
}

export default LeaderboardCard;
