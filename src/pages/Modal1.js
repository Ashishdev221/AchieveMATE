import React from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "../components/Select";
import { Form, Input, Checkbox, Divider } from "antd";
import { Icon } from "@iconify/react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import "../components/Popover1.css";


function Modal1(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  const { Dragger } = Upload;
  const props2 = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Modal show={props.show} onHide={props.handleClose} >
      <Modal.Header>
        <Modal.Title>Upload Your Achievement</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form form={form} name="student_login" onFinish={onFinish} >
          <Form.Item
            name="achievement-title"
            rules={[
              {
                required: true,
                message: "Please input title of your achievement",
              },
            ]}
          >
            <input
              placeholder="Title of your Achievement"
              className="input-container"
              size="large"
            ></input>
          </Form.Item>
          <Form.Item
            name="authority"
            rules={[
              {
                required: true,
                message: "Please enter certifying authority",
              },
            ]}
          >
            <input
              placeholder="Certifying Autority (eg - CTAE, Coursera etc)"
              className="input-container"
            ></input>
          </Form.Item>
          <Form.Item>
            <Select></Select>
          </Form.Item>
          <Form.Item
            name="issue-date"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <input
              placeholder="Certificate Issue Date"
              className="input-container"
            ></input>
          </Form.Item>
          <FormItem>
            <Dragger {...props2}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
              (Only Png, Jpg and Jpeg file format allowed and
                    Maximum file size allowed is 5MB)
              </p>
            </Dragger>
          </FormItem>

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

export default Modal1;
