import React, { useContext } from "react";
import { useEffect } from "react";
import "./SignUpPage.css";
import TeamCard from "../components/TeamCard";
import { Icon } from "@iconify/react";
import { Button, Form, Input, Checkbox, Divider } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import OtpModal from "../components/OtpModal";

const SignUpPage = () => {
  const { setUserInformation } = useContext(UserContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [otp, setOtp] = useState();
  const [userValues, setUserValues] = useState({});

  const onFinish = async (values) => {
    // setShowModal(true);
    setUserValues(values);
    handleUserVerification(values);
    // create_user(values);
  };

  const handleUserVerification = (values) => {
    const { name, enrollment, password } = values;
    console.log(enrollment);
    try {
      axios
        .get(
          `http://127.0.0.1:5000/api/users/isUser/${encodeURIComponent(
            enrollment
          )}`
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            const user = {
              ...res.data,
            };
            // console.log("User is: ",user)
            setUserEmail(user.email);
            setShowModal(true);
            sendOtp(user.email);
          }
        });
    } catch {
      console.log(error);
    }
  };

  const sendOtp = (userEmail) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    axios
      .post("http://127.0.0.1:5000/api/users/send-otp", {
        email: userEmail,
        otp: otp,
      })
      .then((res) => {
        console.log("&&&&&&", res);
        setOtp(otp);
      });
    // return otp;
  };

  const create_user = () => {
    const { name, enrollment, password } = userValues;
    try {
      axios
        .post("http://127.0.0.1:5000/api/users", { name, enrollment, password })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            const user = {
              role: "student",
              ...res.data,
            };

            setUserInformation(user);
            navigate("/home-page");
            // toast.success("Successfully signed up", {
            //   position: "top-center",
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginpage flex-container">
        <div className="leftside d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
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
              <TeamCard firstName="Sourabh" lastName="Purbia" img="./1.png" url='https://www.linkedin.com/in/sourabhpurbia/' />
              <TeamCard firstName="Ashish" lastName="Dev" img="./2.png" url='https://www.linkedin.com/in/ashish-dev-091b651a3/' />
              <TeamCard firstName="Pankaj" lastName="Kumawat" img="./4.png" url='https://www.linkedin.com/in/pankaj-kumawat/' />
              <TeamCard firstName="Kanhav" lastName="Sukhwal" img="./3.png" url='https://www.linkedin.com/in/kanhav-sukhwal-2b6ab11b6/' />
              <TeamCard firstName="Kuldeep" lastName="Katara" img="./5.png" url='https://www.linkedin.com/in/kuldeep-katara-694072252/' />
            </div>
          </div>
        </div>
        <div className="rightside">
          <div>
            <img className="rightside_logo" src="/logo01-1@2x.png" alt="" />
            <h1 className="rightside_heading">Create Your Account</h1>
          </div>
          <div className="mt-2 w-60">
            <Form
              form={form}
              name="student_login"
              // layout="inline"
              onFinish={onFinish}
            // initialValues={}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: " Please input your name",
                  },
                ]}
              >
                <Input
                  prefix={<Icon icon="mdi:account" color="#2d2380" />}
                  placeholder=" Enter Your Name"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="enrollment"
                rules={[
                  {
                    required: true,
                    message: "Please input your Enrollment number!",
                  },
                  {
                    pattern: /^20\d{2}\/CTAE\/\d{1,3}$/,
                    message: 'Enrollment number must be in correct format',
                  },
                ]}
              >
                <Input
                  prefix={<Icon icon="mdi:card-bulleted" color="#2d2380" />}
                  placeholder=" Enrollment Number"
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
                  placeholder=" Password"
                  hasFeedback
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<Icon icon="mdi:password" color="2D2380" />}
                  placeholder=" Confirm Password"
                />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
              // {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <hr></hr>
            <p className="m-4 text-center">
              Already have an account? <a href="/login">Login Here</a>
            </p>
          </div>
        </div>
      </div>
      {
        showModal && (
          <OtpModal
            showModal={showModal}
            userEmail={userEmail}
            otp={otp}
            handleSignUp={create_user}
          />
        )
      }
    </>
  );
};

export default SignUpPage;
