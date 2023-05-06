import React, { useState } from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

function ParentComponent() {
  // const [currentModal, setCurrentModal] = useState(1);

  // const handleModal1Close = () => {
  //   setCurrentModal(2);
  // };

  // const handleModal2Close = () => {
  //   setCurrentModal(3);
  // };

  // const handleModal3Close = () => {
  //   setCurrentModal(1);
  // };

  const [popover1Visible, setPopover1Visible] = useState(true);
  const [popover2Visible, setPopover2Visible] = useState(false);
  const [popover3Visible, setPopover3Visible] = useState(false);

  const handlePopover1ButtonClick = () => {
    setPopover1Visible(false);
    setPopover2Visible(true);
  };

  const handlePopover2ButtonClick = () => {
    setPopover2Visible(false);
    setPopover3Visible(true);
  };

  const handlePopover3ButtonClick = () => {
    setPopover3Visible(false);
  };

  const closeAllModal = ( ) =>{
    setPopover1Visible(false);
    setPopover2Visible(false);
    setPopover3Visible(false);
  }

  return (
    <>
      <Modal1  show={popover1Visible} handleClose={handlePopover1ButtonClick} onClose={closeAllModal}/>
       <Modal2 show={popover2Visible} handleClose={handlePopover2ButtonClick} onClose={closeAllModal}/>
       <Modal3 show={popover3Visible} handleClose={handlePopover3ButtonClick} onClose={closeAllModal}/>
    </>
  );
}

export default ParentComponent;