import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="flex-container">
        <Link to="/">
          <img className="logo" src="/main09-1@2x.png" alt="Achievemate" />
        </Link>
        <Link>
          <div className="header_option">
            <span className="header_optionLineOne">Team</span>
          </div>
        </Link>
        <Link>
          <div className="header_option">
            <span className="header_optionLineOne">Contact Us</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
