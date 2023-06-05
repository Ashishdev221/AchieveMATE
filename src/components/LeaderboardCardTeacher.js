import React from "react";

function LeaderboardCardTeacher(props) {
  return (
    <div className="leaderboardCard container flex-container">
      <img className="home_page_img" src={props.img} alt="" />
      <div className="leaderboardCard_info container">
        <h4 className="leaderboardCard_heading">{props.name}</h4>
        <p className="leaderboardCard_para">{props.designation}</p>
        <p className="leaderboardCard_para">{props.branch}</p>
      </div>
      {/* <img className="home_page_img" src="1-1@2x.png" alt="" /> */}
      {/* <p>4</p> */}
    </div>
  );
}

export default LeaderboardCardTeacher;
