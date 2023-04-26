import React from 'react'
import "./DeptLeaderboardCard.css";

function DeptLeaderboardCard() {
  return (
    <div className="dept_leaderboardCard container flex-container">
      <img className="home_page_img" src="1-1@2x.png" alt="" />
      <div className="leaderboardCard_info container">
        <h4 className="leaderboardCard_heading">Sourabh Purbia Sourabh Purbia</h4>
        <p className="leaderboardCard_para">100 Achievements</p>
      </div>
      
      {/* <p>4</p> */}
    </div>
  )
}

export default DeptLeaderboardCard