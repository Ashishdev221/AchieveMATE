import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginTeacher.css";
import TeamCard from "../components/TeamCard";
import { Icon } from "@iconify/react";
import { Button, Form, Input, Checkbox, Divider } from "antd";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import OtpModal from "../components/OtpModal";

const LoginTeacher = () => {
  const { setUserInformation } = useContext(UserContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const [teacherValues, setTeacherValues] = useState({});
  const [email, setEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const onFinish = (values) => {
    setEmail(values.email);
    doVerification(values);
  };

  const doVerification = (values) => {
    const { email, password } = values;
    try {
      axios
        .post("http://127.0.0.1:5000/api/teachers/login", { email, password })
        .then((res) => {
          if (res.status === 200) {
            const user = {
              role: "teacher",
              ...res.data,
            };
            setTeacherValues(user);
            sendOtp(values.email);
            setShowModal(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const doLogin = () => {
    setUserInformation(teacherValues);
    localStorage.setItem("userInformation", JSON.stringify(teacherValues));
    setShowModal(false);
    navigate("/teacher-dashboard");
  };

  const sendOtp = (userEmail) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    axios
      .post("http://127.0.0.1:5000/api/users/send-otp", {
        email: userEmail,
        otp: otp,
      })
      .then((res) => {
        setOtp(otp);
      });
    // return otp;
  };

  return (
    <>
      <div className="loginpage flex-container">
        <div className="leftside d-flex flex-column justify-content-center">
          <div className="leftside_info">
            <h1 className="leftside_heading">
              Your Students <br></br>{" "}
              <span className="yellow_col">Your Pride</span>,
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
              <TeamCard
                firstName="Sourabh"
                lastName="Purbia"
                img="./1.png"
                url="https://www.linkedin.com/in/sourabhpurbia/"
              />
              <TeamCard
                firstName="Ashish"
                lastName="Dev"
                img="./2.png"
                url="https://www.linkedin.com/in/ashish-dev-091b651a3/"
              />
              <TeamCard
                firstName="Pankaj"
                lastName="Kumawat"
                img="./4.png"
                url="https://www.linkedin.com/in/pankaj-kumawat/"
              />
              <TeamCard
                firstName="Kanhav"
                lastName="Sukhwal"
                img="./3.png"
                url="https://www.linkedin.com/in/kanhav-sukhwal-2b6ab11b6/"
              />
              <TeamCard
                firstName="Kuldeep"
                lastName="Katara"
                img="./5.png"
                url="https://www.linkedin.com/in/kuldeep-katara-694072252/"
              />
            </div>
          </div>
        </div>
        <div className="rightside" style={{ height: "100vh" }}>
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
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
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
      {showModal && (
        <OtpModal
          showModal={showModal}
          userEmail={email}
          otp={otp}
          handleSignUp={doLogin}
        />
      )}
    </>
  );
};

export default LoginTeacher;
