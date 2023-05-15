import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import UploadFirst from "./UploadFirst";
import UploadSecond from "./UploadSecond";
import UploadThird from "./UploadThird";

const UploadModal = ({ showModal, hideModalUpload }) => {
  const [currentOpen, setCurrentOpen] = useState("first");
  const [uploadData, setUploadData] = useState({});
  const [file, setFile] = useState()

  const handleCancel = () => {
    setCurrentOpen("first");
    hideModalUpload();
  };

  return (
    <>
      <Modal
        open={showModal}
        footer={null}
        centered={true}
        destroyOnClose
        onCancel={handleCancel}
        maskClosable={false}
      >
        <div style={{ display: currentOpen === "first" ? "" : "none" }}>
          <UploadFirst
            hideModalUpload={hideModalUpload}
            setCurrentOpen={setCurrentOpen}
            setFile={setFile}
            setUploadData={setUploadData}
          />
        </div>
        <div style={{ display: currentOpen === "second" ? "" : "none" }}>
          <UploadSecond
            hideModalUpload={hideModalUpload}
            setCurrentOpen={setCurrentOpen}
            setUploadData={setUploadData}
            uploadData={uploadData}
          />
        </div>
        <div style={{ display: currentOpen === "third" ? "" : "none" }}>
          <UploadThird
            hideModalUpload={hideModalUpload}
            setCurrentOpen={setCurrentOpen}
            file={file}
            uploadData={uploadData}
          />
        </div>
      </Modal>
    </>
  );
};

export default UploadModal;
