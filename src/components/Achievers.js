import React from "react";
import "./Achievers.css";
import Button from "./Button";
import LeaderboardCard from "./LeaderboardCard";

function Achievers({userData, leaderBoardData }) {
  console.log("inside achievement",userData, leaderBoardData,'ll');
  let top5Users = [];
  for(var i=0;i<5;i++)
  {
    top5Users.push(leaderBoardData[i])
  }
  return (
    <div className="achievers">
      <h3 className="achievers_heading">
        Achiever's <br /> Leaderboard
      </h3>
      <div>
        {leaderBoardData.map((item, index) => {
         if (index <= 4 || item.user.name === userData.name) {
          console.log(item, userData.name);
          return (
            <LeaderboardCard
              count={item.count}
              name={item.user.name}
              image={item.user.img}
              badgeImage={
                index === 0
                  ? "1-1@2x.png"
                  : index === 1
                  ? "2-24@2x.png"
                  : "3-51@2x.png"
              }
              index={index}
              className={
                item.user.name !== userData.name
                  ? "leaderboardCard container flex-container"
                  : "leaderboardCard container flex-container current_user"
              }
            />
          );
        }
        })}
      </div>
      {/* <Button label="Show all" className="button achievers_btn" /> */}
    </div>
  );
}

export default Achievers;
