import React from "react";
import "./Achievers.css";
import Button from "./Button";
import LeaderboardCard from "./LeaderboardCard";

function Achievers({ leaderBoardData }) {
  console.log("inside achievement", leaderBoardData);
  return (
    <div className="achievers">
      <h3 className="achievers_heading">
        Achiever's <br /> Leaderboard
      </h3>
      <div>
        {leaderBoardData.map((item,index) => {
          return (
            <LeaderboardCard
              count={item.count}
              name={item.user.name}
              image={item.user.img}
              badgeImage={index===0?"1-1@2x.png":index===1?"2-24@2x.png":"3-51@2x.png"}
            />
          );
        })}

        {/* <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard />
            <LeaderboardCard /> */}
      </div>
      <Button label="Show all" className="button achievers_btn" />
    </div>
  );
}

export default Achievers;
