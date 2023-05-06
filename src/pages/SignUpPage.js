import React from "react";
import { useEffect } from "react";
import "./SignUpPage.css";
import TeamCard from "../components/TeamCard";
import { Icon } from "@iconify/react";
import { Button, Form, Input, Checkbox, Divider } from "antd";

const SignUpPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Finish:", values);
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
  );
};

export default SignUpPage;
