import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginTeacher.css";
import TeamCard from "../components/TeamCard";
import { Icon } from "@iconify/react";
import { Button, Form, Input, Checkbox, Divider } from "antd";

const LoginTeacher = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className="loginpage flex-container">
      <div className="leftside">
        <div className="leftside_info">
          <h1 className="leftside_heading">
            Your Students <br></br>  <span className="yellow_col">Your Pride</span>,
            
          </h1>
          <p className="leftside_para">
            Verify your students' achievements and acknowledge them. Every
            student deserves to be recognized for their achievements.
          </p>
        </div>
        <div className="meet_the_team">
          <h3 className="team_heading">Meet the Team</h3>
          <hr className="hr_login" />
          <div className="flex-container team_cards">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <div className="rightside">
        <div>
          <img className="rightside_logo" src="/logo01-1@2x.png" alt="" />
          <h1 className="rightside_heading">Teachers Dashboard</h1>
        </div>
        <div className="mt-5 w-60">
          <Form
            form={form}
            name="student_login"
            // layout="inline"
            onFinish={onFinish}
            // initialValues={}
          >
            <Form.Item
              name="enrollment"
              rules={[
                {
                  required: true,
                  message: "Please input your Enrollment number!",
                },
              ]}
            >
              <Input
                prefix={<Icon icon="mdi:card-bulleted" color="#2d2380" />}
                placeholder=" Email Id"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: " Please input your password!",
                },
              ]}
            >
              <Input
                prefix={<Icon icon="mdi:password" color="2D2380" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          <hr></hr>
          <p className="m-4 text-center">
            Thank you for your time & Effort &#9829;
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginTeacher;
