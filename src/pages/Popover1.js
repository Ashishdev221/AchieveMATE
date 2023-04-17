import React from "react";
import "./Popover1.css";
import Select from "../components/Select";
import Button from "../components/Button";
function Popover1() {
    return (
        <><div className="popover-container">
               <img src="/crossIcon.svg" width={'20px'} height={'20px'} className="cross-icon"/>
            <h5 className="popover-header">Upload Your Achievement</h5>
            <div className="flex-container-popover">
                <div className="popover-rectangle blue-rectangle" />
                <div className="popover-rectangle grey-rectangle" />
                <div className="popover-rectangle grey-rectangle" />
            </div>
            <div className="flex-container-column">
                <input placeholder="Title of your Achievement" className="input-container"></input>
                <input placeholder="Certifying Autority (eg - CTAE, Coursera etc)" className="input-container"></input>
                <Select></Select>
                <input placeholder="Certificate Issue Date" className="input-container"></input>
            </div>
            <div className="dragger-container">
                <img src="/Dragger.svg" width={'20px'} height={'20px'} className="margin-auto" />
                <p className="margin-0px">Drag and Drop here</p>
                <p className="margin-0px">------or------</p>
                <Button className='margin-auto button2' label={'Choose File'} id={'choose-file'}></Button>
                <p className="margin-0px">Upload Guidelines</p>
                <p className="margin-0px">(Only Png, Jpg and Jpeg file format allowed and
                    Maximum file size allowed is 5MB)</p>
            </div>
            <div className="button-container">
             <Button label={'Cancel'} id={'cancel-btn'} className={'button2'}></Button>
             <Button label={'Next'} className={'button2'}></Button>
            </div>

        </div></>
    );
}

export default Popover1;
