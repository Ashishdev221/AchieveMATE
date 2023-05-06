import { Icon } from "@iconify/react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import Profile from "./Profile";
import ProfileCard from "./ProfileCard";
import Link from "antd/es/typography/Link";

const AchievementPreview = () => {
  return (
    <>
      <Modal
        open={true}
        width={1100}
        centered={true}
        closeIcon={<Icon icon="mdi:close-box" color="#f90c0c" />}
        className="achivement-preview"
        footer={null}
      >
        <Form layout="vertical">
          <Row gutter={[32, 8]}>
            <Col span={12}>
              <div>
                <img src="/Rectangle 47.png" />
              </div>
              <div className="my-2">
                <Form.Item label="Category of Achievements">
                  <Input readOnly value={"Technical Achivement"} />
                </Form.Item>
                <Form.Item label="Certificate Number">
                  <Input readOnly value={"Thomso22/ADDESIGN/1245"} />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <h4>Posted By</h4>
              <div>
                <ProfileCard />
              </div>
              <div className="my-2">
                <Button
                  size="small"
                  style={{ backgroundColor: "#3D0EA933", color: "#3C10A5" }}
                >
                  Certificate Link
                </Button>
              </div>
              <div className="my-3 ">
                <Form.Item label="Title of the Achievement">
                  <Input
                    readOnly
                    value={"Certificate of Ad Design Winner at IITR"}
                  />
                </Form.Item>
                <Form.Item label="Certifying Authority">
                  <Input readOnly value={"IIT Roorkee"} />
                </Form.Item>
                <Form.Item label="Date of Issue">
                  <Input readOnly value={"15th March, 2023"} />
                </Form.Item>
                <Form.Item label="Description">
                  <Input readOnly value={"Winner Winner chicken dinner"} />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Button
              size="medium"
              style={{ backgroundColor: "#FFBA28" }}
              icon={<Icon icon="mdi:tick-circle" />}
            >
              <span style={{ paddingLeft: "10px" }}>Approve</span>
            </Button>
            <Button
              size="medium"
              style={{ backgroundColor: "red", color: "white" }}
              icon={<Icon icon="gridicons:cross-circle" />}
            >
              <span style={{ paddingLeft: "10px" }}>Reject</span>
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default AchievementPreview;
