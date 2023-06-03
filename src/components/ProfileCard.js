import { Col, Row } from "antd";
import React from "react";

const ProfileCard = (props) => {
  return (
    <Row>
      <Col span={9}>
        <div>
          <img src={props.user?.img} height={100}/>
        </div>
      </Col>
      <Col justify={"center"} style={{marginLeft:'40px'}}>
        <h5>{props.user.name}</h5>
        <p style={{margin: "0px"}}>{props.user.class}</p>
        <p style={{margin: "0px"}}>{props.user.branch}</p>
      </Col>
    </Row>
  );
};

export default ProfileCard;
