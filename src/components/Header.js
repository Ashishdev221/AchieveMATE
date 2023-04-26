import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "../components/Button";

function Header() {
  return (
    <div>
      <div class="home_header container">
        <header class="d-flex flex-wrap justify-content-center py-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img className="home_header_logo" src="main09-1@2x.png" alt="" />
          </a>

          <ul class="nav nav-pills align-items-center">
            <li class="nav-item">
              <a href="#" class="nav-link link-light" aria-current="page">
                Team
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-light">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <Button label="Login as a Teacher" />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
