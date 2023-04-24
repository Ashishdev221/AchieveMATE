import React from "react";
import "./Post.css";

import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import ShareIcon from "@mui/icons-material/Share";

function Post() {
  return (
    <div className="post">
      <div className="post_info">
        <h3 className="post_title">
          Title Here - Title of the Certificate (Character Limit - 56)
        </h3>
        <div className="post_sub_info flex-container">
          <div className="flex-container">
            <Icon icon="mdi:book-education" width="20" height="20" />
            <p>University of Arts, California</p>
          </div>
          <div className="flex-container">
            <Icon icon="ph:certificate-fill" width="20" height="20" />
            <p>CA/2019/35685SP</p>
          </div>
          <div className="flex-container">
            <Icon icon="mdi:link-box-variant-outline" width="20" height="20" />
            <p>Certificate Link</p>
          </div>
        </div>
      </div>
      <img className="post_img" src="/rectangle-41@2x.png" alt="" />
      <div className="post_bottom">
        <Button variant="outlined" startIcon={<ShareIcon />}>
          Share
        </Button>
        <p className="post_des">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
      </div>
    </div>
  );
}

export default Post;
