import React from "react";
import "./Popover2.css";
import Button from "../components/Button";
function Popover2() {
    return (
        <><div className="popover-container2">
                <img src="/crossIcon.svg" width={'20px'} height={'20px'} className="cross-icon2"/>
            <h5 className="popover-header2">Details</h5>
            <div className="flex-container2">
                <div className="popover-rectangle2 blue-rectangle2" />
                <div className="popover-rectangle2 blue-rectangle2" />
                <div className="popover-rectangle2 grey-rectangle2" />
            </div>
            <div className="flex-container-column2">
                <input placeholder="Certificate Number" className="input-container2"></input>
                <input placeholder="Certificate Link" className="input-container2" type="link"></input>
                <textarea maxLength={'150'} placeholder="Description of your Achievement (Max 150 words)"></textarea>
            </div>
            <div className="button-container2">
                <Button label={'Skip'} id={'cancel-btn'} className={'button2'}></Button>
                <Button label={'Next'} className={'button2'}></Button>
            </div>

        </div></>
    );
}

export default Popover2;
