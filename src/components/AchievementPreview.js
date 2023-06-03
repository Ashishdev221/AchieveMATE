import { Icon } from "@iconify/react";
import { Button, Col, Form, Input, Modal, Row } from "antd";
import React from "react";
import Profile from "./Profile";
import ProfileCard from "./ProfileCard";
import Link from "antd/es/typography/Link";

const AchievementPreview = (props) => {
  const handleClosePopupClick = (rowId) => {
    props.handleClosePopup(rowId);
  };
  console.log('dddddd',props.viewedAchievement)
  return (
    <>
      <Modal
        open={props.openPopups[props.row] || false}
        width={1100}
        centered={true}
        closeIcon={<Icon onClick={() => handleClosePopupClick(props.row)} icon="mdi:close-box" color="#f90c0c" />}
        className="achivement-preview"
        footer={null}
      >
        <Form id={props.row} layout="vertical">
          <Row gutter={[32, 8]}>
            <Col span={12}>
              <div>
                <img src={props.viewedAchievement?.img} style={{width: '519px', height: '415px'}}/>
              </div>
              <div className="my-2">
                <Form.Item label="Category of Achievements">
                  <Input readOnly value={props.viewedAchievement?.category} />
                </Form.Item>
                <Form.Item label="Certificate Number">
                  <Input readOnly value={props.viewedAchievement?.certificate_number} />
                </Form.Item>
              </div>
            </Col>
            <Col span={12}>
              <h4>Posted By</h4>
              <div>
                <ProfileCard user={props.viewedAchievement?.user}/>
              </div>
              <div className="my-2">
                <Button
                  size="small"
                  style={{ backgroundColor: "#3D0EA933", color: "#3C10A5" }}
                  href={props.viewedAchievement?.certificate_link}
                >
                  Certificate Link
                </Button>
              </div>
              <div className="my-3 ">
                <Form.Item label="Title of the Achievement">
                  <Input
                    readOnly
                    value={props.viewedAchievement?.title}
                  />
                </Form.Item>
                <Form.Item label="Certifying Authority">
                  <Input readOnly value={props.viewedAchievement?.certifying_authority} />
                </Form.Item>
                <Form.Item label="Date of Issue">
                  <Input readOnly value={props.viewedAchievement?.certificate_issue_date} />
                </Form.Item>
                <Form.Item label="Description">
                  <Input readOnly value={props.viewedAchievement?.description} />
                </Form.Item>
              </div>
            </Col>
          </Row>
          {/* <Row justify={"center"}>
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
          </Row> */}
        </Form>
      </Modal>
    </>
  );
};

export default AchievementPreview;
