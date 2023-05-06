import React from "react";
import "./ContactUs.css";
import { Button, Form, Input } from "antd";
import { Icon } from "@iconify/react";

const { TextArea } = Input;

function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="contact_us flex-container row">
      <div className="col-6">
        <h1 className="contact_us_head">Contact Us</h1>
        <p className="contact_us_para">
          Get in touch with us for any queries or feedback. <br /> We would love
          to hear from you!
        </p>
        <Form form={form} name="contact_us" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              prefix={<Icon icon="mdi:email" color="#2d2380" />}
              placeholder=" Email"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Please enter only digits",
              },
            ]}
          >
            <Input
              prefix={<Icon icon="mdi:phone" color="#2d2380" />}
              placeholder=" Phone"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter your message",
              },
            ]}
          >
            <div style={{ position: "relative" }}>
              <TextArea
                placeholder=" Your message here"
                autoSize={{ minRows: 5, maxRows: 7 }}
                style={{ paddingLeft: "2em" }}
              />
              <Icon
                icon="mdi:message"
                color="#2d2380"
                style={{
                  position: "absolute",
                  left: "0.8em",
                  top: "0.8em",
                }}
              />
            </div>
          </Form.Item>
          <Form.Item>
            <Button
              // type="primary"
              htmlType="submit"
              // className="login-form-button"
              size="large"
              style={{ backgroundColor: "#FFBA28", color: "black" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="col-6"
      >
        <img
          className="contact_us_img"
          src="/3drenderastronautcallinggesturewitholdtelephone3dillustrationdesign-1@2x.png"
          alt=""
          style={{ height: "80%" }}
        />
      </div>
    </div>
  );
}

export default ContactUs;
