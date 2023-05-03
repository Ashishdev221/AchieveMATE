import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import Badge from "../components/Badge";
import Button2 from "../components/Button2";
import Search from "../components/Search";
import "./AchievementsTable.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const AchievementsTable = () => {
  let data = [
    "Approved",
    "Approved",
    "Approved",
    "Rejected",
    "In Review",
    "Approved",
    "Approved",
    "Approved",
    "Rejected",
    "In Review",
  ];
  return (
    <>
      <div class="container-fluid">
        <div class="d-flex justify-content-between my-4">
          {" "}
          <Search></Search>{" "}
          <button className="btn2">
            {" "}
            <img
              src="/addIcon.svg"
              width={"20px"}
              height={"20px"}
              className="mx-3 my-1"
            />
            Add New
          </button>
        </div>
        <div class="d-flex justify-content-between my-4">
          <p>Showing 1-10 Achievements of 23 Results</p>
        </div>
      </div>
      <table class="table">
        <thead style={{ backgroundColor: "#FFF8E9" }}>
          <tr>
            <th scope="col" style={{ width: "5%" }}>
              <Checkbox></Checkbox>
            </th>
            <th scope="col" style={{ width: "50%" }}>
              Title
            </th>
            <th scope="col" style={{ width: "10%" }}>
              Status
            </th>
            <th scope="col" style={{ width: "10%" }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              <td>
                <Checkbox></Checkbox>
              </td>
              <td style={{ textAlign: "center" }} className="title col-3">
                Thomso 22 Winner
              </td>
              <td>{<Badge label={row}></Badge>}</td>
              <td style={{ textAlign: "center" }}>
                {row === "Approved" && (
                  <div className="horizontal-button-grp">
                    <Button2
                      label={"View"}
                      className={"button-style mx-2"}
                    ></Button2>{" "}
                    <Button2
                      label={"Share"}
                      className={"cancel-btn-style button-style"}
                    ></Button2>
                  </div>
                )}
                {row === "Rejected" && (
                  <Button2
                    // style={{ paddingLeft: "30px" }}
                    label={"Request Recheck"}
                    className={"recheck-btn-style button-style"}
                  ></Button2>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AchievementsTable;
