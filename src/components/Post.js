import React from "react";
import "./Post.css";

import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import ShareIcon from "@mui/icons-material/Share";
import LeaderboardCard from "./LeaderboardCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Post(props) {
  return (
    <div className="post">
      <div className="post_info">
        <LeaderboardCard
          count={props.user.achievement_count}
          name={props.user.name}
          image={props.user.img}
          icon={<MoreHorizIcon fontSize="large" />}
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
            <p>{props.certificateNo}</p>
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
        src={
          props.img ===
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-7289b7fef37b1bda2dc3527df90bfe87_screen.jpg?ts=1631442106"
            ? props.img
            : "https://sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg"
        }
        alt="posts"
      />
      <div className="post_bottom">
        <Button variant="outlined" startIcon={<ShareIcon />}>
          Share
        </Button>
        <p className="post_des">{props.description}</p>
      </div>
    </div>
  );
}

export default Post;
