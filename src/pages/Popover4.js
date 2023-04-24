import React from "react";
import "./Popover4.css";
import Button from "../components/Button";
function Popover4() {
    return (<><div className="popover-container4">
        <img src="/crossIcon.svg" width={'20px'} height={'20px'} className="cross-icon4" />
        {/*                
            <h5 className="popover-header4">Details</h5>
            <div className="flex-container4">
                <div className="popover-rectangle4 blue-rectangle4" />
                <div className="popover-rectangle4 blue-rectangle4" />
                <div className="popover-rectangle4 blue-rectangle4" />
            </div> */}
        <div className="flex-container-column4">
            <img src="/email.svg" width={'20px'} height={'20px'} className="email-image" />
            <h2>Please Verify Your Email</h2>
            <p className="enter-otp-desc">Enter the OTP sent to <span style={{ fontWeight: 'bold' }}>skpurbia1@gmail.com</span></p>
            <p className="change-p">Change</p>
            <div className="flex-container4">

                <input className="otp-box"></input>
                <input className="otp-box"></input>
                <input className="otp-box"></input>
                <input className="otp-box"></input>
                <input className="otp-box"></input>
                <input className="otp-box"></input>

            </div>
            <p className="change-p">Resend OTP</p>
            <div className="button-container4">
                <Button label={'Skip'} id={'cancel-btn'} className='button2'></Button>
                <Button label={'Next'} className='button2'></Button>
            </div>
        </div>


    </div></>);

}

export default Popover4;