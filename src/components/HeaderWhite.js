import React from "react";
import "./HeaderWhite.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "../components/Button";

function HeaderWhite({showModalUpload}) {
  return (
    <div>
      <div class="home_header_white  container">
        <header class="d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img className="home_header_logo" src="main02-1@2x.png" alt="" />
          </a>

          <ul class="nav nav-pills align-items-center">
            <li class="nav-item">
              <a href="#" class="nav-link link-dark" aria-current="page">
                <SearchIcon />
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-dark">
                <NotificationsIcon />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Button label="Upload" onClick={showModalUpload} />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default HeaderWhite;
