import React from "react";
import "./PhonePopover.css";
import Button from "../components/Button";
function Popover4() {
  return (
    <>
      <div className="popover-container5">
        <img
          src="/crossIcon.svg"
          width={"20px"}
          height={"20px"}
          className="cross-icon5"
        />
        {/*                
            <h5 className="popover-header4">Details</h5>
            <div className="flex-container4">
                <div className="popover-rectangle4 blue-rectangle4" />
                <div className="popover-rectangle4 blue-rectangle4" />
                <div className="popover-rectangle4 blue-rectangle4" />
            </div> */}
        <div className="flex-container-column5">
          <img
            src="/phone.svg"
            width={"20px"}
            height={"20px"}
            className="phone-image"
          />
          <h2>Verify Your Phone Number</h2>
          <p className="enter-otp-desc">Enter the OTP sent to +91861*****57</p>
          <p className="change-p5">
            (This Number is Registered with the entered enrollment number)
          </p>
          <div className="flex-container5">
            <input className="otp-box"></input>
            <input className="otp-box"></input>
            <input className="otp-box"></input>
            <input className="otp-box"></input>
            <input className="otp-box"></input>
            <input className="otp-box"></input>
          </div>
          <p className="change-p">Resend OTP</p>
          <div className="button-container5">
            <Button
              label={"Skip"}
              id={"cancel-btn"}
              className="button2"
            ></Button>
            <Button label={"Next"} className="button2"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popover4;
