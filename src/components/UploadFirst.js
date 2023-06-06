import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload, Select, DatePicker } from "antd";
import moment from "moment";

const UploadFirst = ({ hideModalUpload, setCurrentOpen, setFile, setUploadData }) => {
  const [form] = Form.useForm();
  const { Dragger } = Upload;

  const achievementOptions = [
    "Academic Achievements",
    "Internship and Work Achievements",
    "Global Achievement",
    "Entrepreneurship and Innovation Achievements",
    "Research and Publication Achievements",
    "Social Impact Achievements",
    "Health and Wellness Achievements",
    "Creative Arts Achievements",
    "Music and Dance Achievements",
    "Literature Achievements",
    "Athletics and Sports Achievements",
  ];

  const onFinish = (values) => {
    // event.preventDefault();
    console.log("Finish:", values);
    const fileData = values.certificate.file.originFileObj;
    setUploadData({...values, certificate: fileData});
    if (fileData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);        
      };
      reader.readAsDataURL(fileData);
    } else {
      setFile('');
    }
    // Perform further actions with the file
    setCurrentOpen("second");
  };

  const disabledDate = (current) => {
    // Disable dates after today (future dates)
    return current && current > moment().endOf("day");
  };

  const props2 = {
    name: "file",
    multiple: true,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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


  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };


  return (
    <div>
      <h4 style={{ margin: "1rem", textAlign: "center" }}>
        Upload Your Achievement
      </h4>
      <Form
        form={form}
        name="upload-first"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="Title"
          label="Achievement Title"
          className="floating-label"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Input
            placeholder="Title of your Achievement"
            className="input-container"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="Authority"
          label="Certifying Autority"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Input
            placeholder="eg - CTAE, Coursera etc)"
            className="input-container"
          />
        </Form.Item>
        <Form.Item
          name="Category"
          label="Category of your Achievement"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <Select placeholder="Select Category">
            {achievementOptions.map((option, i) => {
              return <Select.Option key={option}>{option}</Select.Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="Issue Date"
          label="Certificate issue date"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
        >
          <DatePicker style={{ display: "flex" }} disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item name="certificate">
          <Dragger customRequest={dummyRequest} accept="image">
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: "#FFBA28" }} />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              (Only Png, Jpg and Jpeg file format allowed and Maximum file size
              allowed is 5MB)
            </p>
          </Dragger>
        </Form.Item>
        <div className="justify-content-center d-flex">
          <Button style={{ margin: "5px" }} onClick={hideModalUpload}>
            Cancel
          </Button>
          <Button
            style={{ margin: "5px", backgroundColor: "#FFBA28" }}
            htmlType="submit"
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UploadFirst;
