import React, { useState, useEffect } from "react";
import "./DeptLeaderboardCard.css";
import axios from "axios";

function DeptLeaderboardCard() {
  const [achievements, setAchievements] = useState([]);
  const [departmentLeaderBoard, setdepartmentLeaderBoard] = useState([]);

  useEffect(() => {
    console.log("inside use effect");
    const fetchUserDataAndAchievements = async () => {
      try {
        const [achievementsResponse] = await Promise.all([
          axios.get(`http://127.0.0.1:5000/api/achievements/all`),
        ]);

        const achievements = achievementsResponse.data;
        setAchievements(achievements);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
    };

    fetchUserDataAndAchievements();
  }, []);

  useEffect(() => {
    const branches = ["CSE", "ME", "ECE", "EE", "CE"];

    const branchCount = {};

    branches.forEach((branch) => {
      branchCount[branch] = 0;
    });

    achievements.forEach((obj) => {
      const branch = obj.user.branch;
      const status = obj.status;

      if (status === "accepted") {
        if (branch in branchCount) {
          branchCount[branch]++;
        } else {
          branchCount[branch] = 1;
        }
      }
    });

    const result = Object.entries(branchCount).map(([branch, count]) => ({
      [branch]: count,
    }));
    setdepartmentLeaderBoard(result);
  }, [achievements]);
  console.log(achievements, departmentLeaderBoard, "in leaderboard");

  function getFullBranchName(name) {
    if (name === "CSE") {
      return "Computer Science And Engineering";
    } else if (name === "ECE") {
      return "Electronics and Communication Engineering";
    } else if (name === "ME") {
      return "Mechanical Engineering";
    } else if (name === "CE") {
      return "Civil Engineering";
    } else if (name === "EE") {
      return "Electrical Engineering";
    }
  }

  return (
    <div>
      {departmentLeaderBoard.map((item, index) => {
        const branch = Object.keys(item)[0];
        const count = item[branch];

        console.log(branch, count);

        return (
          <div
            className="dept_leaderboardCard container flex-container"
            key={index}
          >
            {/* <img className="home_page_img" src="1-1@2x.png" alt="" /> */}
            {index === 0 && <h3 style={{ color: "blue" }}>{index + 1}</h3>}
            {index > 0 && <h3>{index + 1}</h3>}

            <div className="leaderboardCard_info container">
              <h4 className="leaderboardCard_heading">
                {getFullBranchName(branch)}
              </h4>
              <p className="leaderboardCard_para">{count} Achievements</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeptLeaderboardCard;
