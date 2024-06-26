import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import TeamCard from "../components/TeamCard";
import { Icon } from "@iconify/react";
import axios from "axios";
import { Button, Form, Input, Checkbox, Divider } from "antd";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const LoginPage = () => {
  const { setUserInformation } = useContext(UserContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { enrollment, password } = values;
    try {
      axios
        .post("http://127.0.0.1:5000/api/users/login", { enrollment, password })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            const user = {
              role: "student",
              ...res.data,
            };
            console.log(user)
            setUserInformation(user);
            localStorage.setItem('userInformation', JSON.stringify(user));
            navigate("/home-page");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginpage flex-container">
      <div className="leftside d-flex flex-column justify-content-center">
        <div className="leftside_info">
          <h1 className="leftside_heading">
            It's Your <span className="yellow_col">Achievement</span>,<br></br>{" "}
            Showcase it.
          </h1>
          <p className="leftside_para">
            Be proud of your achievements! Login now and start sharing your
            achievements
          </p>
        </div>
        <div className="meet_the_team">
          <h3 className="team_heading">Meet the Team</h3>
          <hr className="hr_login" />
          <div className="flex-container team_cards">
          <TeamCard firstName="Sourabh" lastName="Purbia" img="./1.png" url='https://www.linkedin.com/in/sourabhpurbia/'/>
            <TeamCard firstName="Ashish" lastName="Dev" img="./2.png" url='https://www.linkedin.com/in/ashish-dev-091b651a3/'/>
            <TeamCard firstName="Pankaj" lastName="Kumawat" img="./4.png" url='https://www.linkedin.com/in/pankaj-kumawat/'/>
            <TeamCard firstName="Kanhav" lastName="Sukhwal" img="./3.png" url='https://www.linkedin.com/in/kanhav-sukhwal-2b6ab11b6/'/>
            <TeamCard firstName="Kuldeep" lastName="Katara" img="./5.png" url='https://www.linkedin.com/in/kuldeep-katara-694072252/'/>
          </div>
        </div>
      </div>
      <div className="rightside" style={{ height: "100vh" }}>
        <div>
          <img className="rightside_logo" src="/logo01-1@2x.png" alt="" />
          <h1 className="rightside_heading">Hello ! Welcome back</h1>
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
                {
                    pattern: /^20\d{2}\/CTAE\/\d{1,3}$/,
                    message: "Enrollment number must be in correct format",
                  },
              ]}
            >
              <Input
                prefix={<Icon icon="mdi:card-bulleted" color="#2d2380" />}
                placeholder="Enrollment Number"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
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
            Don't have an account? <a href="/signup">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
