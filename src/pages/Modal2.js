import React from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "../components/Select";
import { Form, Input, Checkbox, Divider } from "antd";
import { Icon } from "@iconify/react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";

function Modal2(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header>
      <Modal.Title>Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form form={form} name="deatils" onFinish={onFinish}>
        <Form.Item
          name="certificate-number"
          rules={[
            {
              required: true,
              message: "Please input your certificate number",
            },
          ]}
        >
           <input placeholder="Certificate Number" className="input-container"></input>
        </Form.Item>
        <Form.Item
          name="certificate-link"
          rules={[
            {
              required: true,
              message: "Please enter certificate link",
            },
          ]}
        >
           <input placeholder="Certificate Link" className="input-container" type="link"></input>
        </Form.Item>
        <Form.Item>
        <textarea maxLength={'150'} placeholder="Description of your Achievement (Max 150 words)" style={{width:'463px',height:'150px'}} className="input-container"></textarea>
        </Form.Item>
        <Form.Item>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Next
            </Button>
          </Modal.Footer>
        </Form.Item>
      </Form>
    </Modal.Body>
  </Modal>
  );
}

export default Modal2;