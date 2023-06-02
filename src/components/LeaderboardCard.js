import React from "react";
import "./LeaderboardCard.css";

function LeaderboardCard(props) {
  // Assuming the input is in UTC format
  var uploadTime = new Date(props.time);
  var currentTime = new Date();

  // Calculate the time difference in milliseconds
  var timeDiff = currentTime.getTime() - uploadTime.getTime();

  // Convert the time difference to seconds, minutes, hours, or days
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  // Format the output based on the time difference
  var output;
  if (days > 0) {
    output = "uploaded " + days + " day" + (days > 1 ? "s" : "") + " ago";
  } else if (hours > 0) {
    output = "uploaded " + hours + " hour" + (hours > 1 ? "s" : "") + " ago";
  } else if (minutes > 0) {
    output =
      "uploaded " + minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
  } else {
    output = "uploaded just now";
  }

  console.log(output);

  return (
    <div className={props.className}>
      <img
        className="home_page_img"
        src={props.image ? props.image : "/passport-pic-2@2x.png"}
        alt=""
      />

      <div
        className="leaderboardCard_info container"
        style={{ width: "fit-content", marginLeft: "0px"}}
      >
        <h4 className="leaderboardCard_heading">{props.name}</h4>
        {props.name !== "Mrs. Kalpana Jain" && (
          <p className="leaderboardCard_para">{props.count} Achievements</p>
        )}
        <p className="leaderboardCard_para">{props.category}</p>
        <p className="leaderboardCard_para">{props.branch}</p>
      </div>
      {props.index <= 2 && props.badgeImage && (
        <img className="home_page_img" src={props.badgeImage} alt="" />
      )}
      {props.index > 2 && (
        <h3 style={{ marginRight: "20px" }}>{props.index + 1}</h3>
      )}
      {/* <p>{props.icon}</p> */}
      {props.time && <p style={{ width: "fit-content" }}>{output}</p>}
    </div>
  );
}

export default LeaderboardCard;
