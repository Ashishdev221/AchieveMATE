import React from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "../components/Select";
import { Form, Input, Checkbox, Divider } from "antd";
import { Icon } from "@iconify/react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Col, Row } from "antd";

function Modal3(props) {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose} style={{overflow:'auto'}}>
      <Modal.Header>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="d-flex flex-column justify-content-around">
          <div class=' p-4'> <img src="/dummyImage.svg" width={'400px'} height={'400px'} className="icon-position"/></div>
          <div class='mb-3'> <input placeholder="IIT Roorkee" className="input-container"></input></div>
          <div class='mb-3'>  <input placeholder="Hackathon" className="input-container"></input></div>
          <div class='mb-3'>  <input placeholder="THOMSO22/ADDESIGN/1245" className="input-container"></input></div>
          <div class='mb-3'><input placeholder="www.thomso.com/verify/ct/1245" className="input-container"></input></div>
          <div className="mb-3"><input placeholder="Winner of Ad Design Competition at IIT Roorkee with
the team Divyan, sourabh and divyansh." className="input-container"></input></div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Edit
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Publish
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal3;
