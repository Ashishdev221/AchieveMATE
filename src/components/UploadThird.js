import { Upload } from "@mui/icons-material";
import { Button, Form, Input, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const UploadThird = ({ hideModalUpload, setCurrentOpen, file, uploadData }) => {
  const [isEditable, setIsEditable] = useState(false);
  const { userInformation } = useContext(UserContext);
  const [imgurl, setImgurl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [previewUrl, setPreviewUrl] = useState('');
  const [form] = Form.useForm();

  const handleClick = async () => {
    setIsLoading(true);
    console.log(uploadData);
    const formData = new FormData();
    formData.append("file", uploadData.certificate);
    formData.append("upload_preset", "g4pnfwg2");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dopnbfbrl/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.status === 200) {
      const enrollmentNumber = userInformation.enrollment;
      const requestBody = {
        // user: "6460ee9a1743072e152507ff",
        user: userInformation.id,
        title: uploadData.Title,
        certifying_authority: uploadData.Authority,
        category: uploadData.Category,
        certificate_issue_date: "2022-01-01",
        img: res.data.secure_url,
        certificate_number: uploadData.certificateNumber,
        certificate_link: uploadData.certificateLink,
        description: uploadData.certificateDescription,
        status: "pending",
      };
      axios
        .post(
          `http://127.0.0.1:5000/api/achievements/${encodeURIComponent(
            enrollmentNumber
          )}`,
          requestBody
        )
        .then((response) => {
          console.log(response.data);
          hideModalUpload();
          // alert('Achievement uploaded successfully')
        })
        .catch((error) => {
          alert('Achievement not uploaded')
          console.error(error);
        });
    }
    setIsLoading(false)
  };

  useEffect(() => {
    console.log("UploadData", uploadData);
  }, [uploadData]);

  return (
    <Spin spinning={isLoading}>
      <div class="d-flex flex-column justify-content-around">
        <Form form={form} layout="vertical">
          <h4 style={{ margin: "0.5rem", textAlign: "center" }}>Preview</h4>
          <div class=" p-4">
            <img
              // src="/dummyImage.svg"
              src={file}
              width={"400px"}
              height={"400px"}
              className="icon-position"
            />
          </div>
          {/* <div class="mb-3">
          <Input
            // readOnly={!isEditable ? true : false}
            defaultValue="IIT Roorkee"
            className="input-container"
          />
        </div>
        <div class="mb-3">
          <Input
            // readOnly={!isEditable ? true : false}
            defaultValue="Hackathon"
            className="input-container"
          />
        </div>
        <div class="mb-3">
          <Input
            // readOnly={!isEditable ? true : false}
            defaultValue="THOMSO22/ADDESIGN/1245"
            className="input-container"
          />
        </div>
        <div class="mb-3">
          <Input
            // readOnly={!isEditable ? true : false}
            defaultValue="www.thomso.com/verify/ct/1245"
            className="input-container"
          />
        </div>
        <div className="mb-3">
          <TextArea
            // readOnly={!isEditable ? true : false}
            defaultValue="Winner of Ad Design Competition at IIT Roorkee with
the team Divyan, sourabh and divyansh."
            className="input-container"
          />
        </div> */}
          {Object.keys(uploadData).map((item, i) => {
            if (uploadData[item] && item !== "certificate") {
              return (
                <Form.Item label={item}>
                  <Input
                    // readOnly={!isEditable ? true : false}
                    readOnly
                    value={uploadData[item]}
                    className="input-container"
                  />
                </Form.Item>
              );
            }
          })}
          <div className="justify-content-center d-flex">
            <Button
              style={{ margin: "5px" }}
              onClick={() => {
                setCurrentOpen("second");
              }}
            >
              Back
            </Button>
            <Button
              style={{ margin: "5px", backgroundColor: "#FFBA28" }}
              // htmlType="submit"
              onClick={handleClick}
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </Spin>
  );
};

export default UploadThird;
