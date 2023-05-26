import React from "react";
import "./Post.css";

import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import ShareIcon from "@mui/icons-material/Share";
import LeaderboardCard from "./LeaderboardCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function Post(props) {
  console.log(props.leaderBoard, ";;;;;;;;;;;");
  return (
    <div className="post">
      <div className="post_info">
        <LeaderboardCard
          count={props.leaderBoard.count}
          name={props.user.name}
          image={props.user.img}
          icon={<MoreHorizIcon fontSize="large" />}
          time={props.time}
        />
        <h3 className="post_title">{props.title}</h3>
        <div
          className="post_sub_info flex-container"
          style={{ justifyContent: "space-between" }}
        >
          <div className="flex-container">
            <Icon icon="mdi:book-education" width="20" height="20" />
            <p>College of Technology and Engineering</p>
          </div>
          <div className="flex-container">
            <Icon icon="ph:certificate-fill" width="20" height="20" />
            <p>{props.count}</p>
          </div>
          <div className="flex-container">
            <Icon icon="mdi:link-box-variant-outline" width="20" height="20" />
            <a href={props.link}>
              <p>Certificate Link</p>
            </a>
          </div>
        </div>
      </div>
      <img
        className="post_img"
        src={props.img}
        width={"400px"}
        height={"400px"}
        alt="posts"
      />
      <div className="post_bottom">
        <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}>
          Appreciate
        </Button>
        <Button variant="outlined" startIcon={<ShareIcon />}>
          Share
        </Button>
        <Button variant="contained">Ask for help</Button>
        <p className="post_des">{props.description}</p>
      </div>
    </div>
  );
}

export default Post;
