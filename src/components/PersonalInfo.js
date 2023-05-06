import { Icon } from "@iconify/react";
import { Col, Form, Row, Input, Typography } from "antd";
import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const data = {
    name: "Kuldeep Katara",
    enrollment: "2019/CTAE/187",
    phone: "+91 8619898257",
    email: "kuldeep.katara@gmail.com",
    branch: "Computer Science And Engineering",
    class: "B.Tech 4th year",
  };

  return (
    <div className="my-5">
      <div className="my-3">
        <Input
          readOnly
          prefix={<Icon icon="mdi:user" color="black" />}
          value={data.name}
        />
      </div>
      <div className="my-3">
        <Input
          prefix={<Icon icon="mdi:card-bulleted" color="black" />}
          value={data.enrollment}
          readOnly
        />
      </div>
      <div className="my-3">
        <Input
          prefix={<Icon icon="mdi:phone" color="black" />}
          value={data.phone}
          readOnly
        />
      </div>
      <div className="my-3">
        <Input
          prefix={<Icon icon="mdi:email" color="black" />}
          value={data.email}
          readOnly
        />
      </div>
      <div className="my-3">
        <Input
          prefix={<Icon icon="game-icons:graduate-cap" color="black" />}
          value={data.branch}
          readOnly
        />
      </div>
      <div className="my-3">
        <Input
          prefix={<Icon icon="uis:calender" color="black" />}
          value={data.class}
          readOnly
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
