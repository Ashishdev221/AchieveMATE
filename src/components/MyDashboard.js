import React, { useState } from "react";
import "./MyDashboard.css";
import Button from "../components/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@mui/material";
import AchievementsTable from "./AchievementsTable";
import ExpandCollapse from "./ExpandCollapse";
import ToggleButton from "../components/ToggleButton";
import PersonalInfo from "./PersonalInfo";

function MyDashboard() {
  let [linkNumber, setLinkNumber] = useState(0);
  return (
    <>
      <div class="card custom-card-styling">
        <div class="card-body">
          <div class="d-flex p-2">
            <div className="back-btn p-2">
              <img src="/backBtn.svg" width={"20px"} height={"20px"} />
            </div>
            <h3 className="mx-4">My Dashboard</h3>
          </div>
          <nav class="navbar navbar-expand-lg" style={{ width: "100%" }}>
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item" onClick={() => setLinkNumber(1)}>
                    <a class="nav-link active" aria-current="page" href="#">
                      Personal Info
                    </a>
                  </li>
                  <li class="nav-item" onClick={() => setLinkNumber(2)}>
                    <a class="nav-link" href="#achievement">
                      Achievements
                    </a>
                  </li>
                  <li class="nav-item" onClick={() => setLinkNumber(3)}>
                    <a class="nav-link" href="#">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="hline mt-3"></div>
          {linkNumber === 1 && (
            <section id="achievement">
              <PersonalInfo />
            </section>
          )}
          {linkNumber === 2 && (
            <section id="achievement">
              <AchievementsTable></AchievementsTable>
            </section>
          )}
          {linkNumber === 3 && (
            <section id="achievement">
              <ExpandCollapse title="Login & Security">
                <p>Hi</p>
              </ExpandCollapse>
              <ExpandCollapse title="Notification">
                <div className="flex">
                  <div className="d-flex justify-content-between">
                    <h5>Post reaction and appreciations notifications</h5>
                    <ToggleButton></ToggleButton>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Other’s post notification</h5>
                    <ToggleButton></ToggleButton>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>My post status notification</h5>
                    <ToggleButton></ToggleButton>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5>Messages notification</h5>
                    <ToggleButton></ToggleButton>
                  </div>
                </div>
              </ExpandCollapse>
              <ExpandCollapse title="Help & Support">
                <div className="d-flex justify-content-between">
                  <p>If you have any query, reach out to us on email</p>
                  <Button className="button-style" label="Email">
                    Hi there
                  </Button>
                </div>
              </ExpandCollapse>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default MyDashboard;
