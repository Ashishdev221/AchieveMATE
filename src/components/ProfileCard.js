import { Col, Row } from "antd";
import React from "react";

const ProfileCard = () => {
  return (
    <Row>
      <Col span={6}>
        <div>
          <img src="/mask-group@2x.png" height={100}/>
        </div>
      </Col>
      <Col justify={"center"}>
        <h5>Sourabh Purbia</h5>
        <p style={{margin: "0px"}}>B.Tech 4th Year</p>
        <p style={{margin: "0px"}}>Computer Science and Engineering</p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
