import React from "react";
import "./Post.css";
import axios from "axios";

import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import ShareIcon from "@mui/icons-material/Share";
import LeaderboardCard from "./LeaderboardCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
function Post(props) {
  async function likeAchievement(achievementId) {
    try {
      console.log('inside button click', achievementId);
      const response = await axios.put(
        `http://127.0.0.1:5000/api/achievements/likes/${achievementId}`
      );
      console.log(response)
    } catch (error) {
      // console.error(error.response.data);
      // Handle error response
    }
  }

  console.log(props.user.email,props.user,'line 25')

  function redirectToEmail() {
    window.location.href = `mailto:${props.user.email}`;
  }
  
  return (
    <div className="post">
      <div className="post_info">
        <LeaderboardCard
          count={props.leaderBoard.count}
          name={props.user.name}
          image={props.user.img}
          icon={<MoreHorizIcon fontSize="large" />}
          time={props.time}
          className={"leaderboardCard container flex-container"}
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
        width={"600px"}
        height={"600px"}
        alt="posts"
      />
      <div className="post_bottom">
        <Button
          variant="outlined"
          id={props.id}
          startIcon={<ThumbUpOffAltIcon />}
          onClick={(event) => {likeAchievement(event.target.id);props.likeFunction()}}>
          {props.likes}
        </Button>
        <Button variant="outlined" startIcon={<ShareIcon />}>
          Share
        </Button>
        <Button variant="contained" onClick={redirectToEmail}>Ask for help</Button>
        <p className="post_des">{props.description}</p>
      </div>
    </div>
  );
}

export default Post;
