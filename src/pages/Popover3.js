import React from "react";
import "./Popover3.css";
import Select from "../components/Select";
import Button from "../components/Button";
function Popover3() {
    return (
        <><div className="popover-container3">
            <img src="/crossIcon.svg" width={'20px'} height={'20px'} className="cross-icon3" />
            <h5 className="popover-header3">Preview</h5>
            <div className="flex-container3">
                <div className="popover-rectangle3 blue-rectangle3" />
                <div className="popover-rectangle3 blue-rectangle3" />
                <div className="popover-rectangle3 blue-rectangle3" />
            </div>
            <img src="/dummyImage.svg" width={'200px'} height={'200px'} className="icon-position"/>
            <div className="flex-container-column3">
                <input placeholder="Certificate of Ad Design Winner at IITR" className="input-container3"></input>
                <input placeholder="IIT Roorkee" className="input-container3"></input>
                <input placeholder="Hackathon" className="input-container3"></input>
                <input placeholder="THOMSO22/ADDESIGN/1245" className="input-container3"></input>
                <input placeholder="www.thomso.com/verify/ct/1245" className="input-container3"></input>
                <input placeholder="Winner of Ad Design Competition at IIT Roorkee with
the team Divyan, sourabh and divyansh." className="input-container3"></input>
            </div>
            <div className="button-container3">
                <Button label={'Cancel'} id={'cancel-btn'} className={'button2'}></Button>
                <Button label={'Next'} className={'button2'}></Button>
            </div>

        </div></>
    );
}

export default Popover3;
