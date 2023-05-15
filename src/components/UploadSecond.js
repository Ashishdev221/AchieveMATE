import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const UploadSecond = ({ hideModalUpload, setCurrentOpen, uploadData, setUploadData }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
    setUploadData({...uploadData, ...values})
    setCurrentOpen("third");
  };

  return (
    <div>
      <h4 style={{ margin: "1rem", textAlign: "center" }}>Details</h4>
      <Form form={form} name="deatils" onFinish={onFinish}>
        <Form.Item
          name="certificateNumber"
        >
          <Input placeholder="Certificate Number" className="input-container" />
        </Form.Item>
        <Form.Item
          name="certificateLink"
        >
          <Input
            placeholder="Certificate Link"
            className="input-container"
            type="link"
          />
        </Form.Item>
        <Form.Item name="certificateDescription">
          <TextArea
            maxLength={"150"}
            placeholder="Description of your Achievement (Max 150 words)"
            style={{ width: "463px", height: "150px" }}
            className="input-container"
          />
        </Form.Item>
        <div className="justify-content-center d-flex">
          <Button
            style={{ margin: "5px" }}
            onClick={() => {
              setCurrentOpen("first");
            }}
            
          >
            Back
          </Button>
          <Button
            style={{ margin: "5px", backgroundColor: "#FFBA28" }}
            htmlType="submit"
          >
            Next
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <a onClick={() => setCurrentOpen("third")}>Skip</a>
        </div>
      </Form>
    </div>
  );
};

export default UploadSecond;
