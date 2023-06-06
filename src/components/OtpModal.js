import { Button, Form, Input, Modal, Row } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const OtpModal = ({ showModal, userEmail, otp, handleSignUp,handleCloseModal }) => {
  const [localotp, setLocalOtp] = useState("");

  const handleOtpChange = (event) => {
    setLocalOtp(event.target.value); // Update the OTP state as the input value changes
  };

  const handleVerifyClick = () => {
    if (otp == localotp) {
      handleSignUp();
    } else {
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="">
      <Modal open={showModal} footer={null}
      onCancel={handleCloseModal}
      >
        <Row justify={"center"}>
          <img src="/email_verification.svg"/>
          <h2>Please Verify Your Email</h2>
          <span>
            Enter the OTP sent to <strong>{userEmail}</strong>
          </span>
          <input
            style={{ borderRadius: "12px", width: "50%", margin: "20px 0px" }}
            type="text"
            pattern="[0-9]*"
            value={localotp}
            onChange={handleOtpChange}
          />
        </Row>
        <Row justify={"center"}>
          <Button className="mx-2" style={{ borderRadius: "8px" }} onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            className="mx-2"
            style={{ backgroundColor: "#FFBA28", borderRadius: "8px" }}
            onClick={handleVerifyClick}
          >
            Verify
          </Button>
        </Row>
      </Modal>
    </div>
  );
};

export default OtpModal;
