import React from "react";
import "./Footer.css";
import Button from "./Button";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top flex-container">
        <img className="footer_img" src="/main10-1@2x.png" alt="" />
        <div className="footer_column">
          <h4 className="footer_heading">About</h4>
          <a className="footer_element" href="">
            About Us
          </a>
          <a className="footer_element" href="">
            Team
          </a>
        </div>
        <div className="footer_column">
          <h4 className="footer_heading">Support</h4>
          <a className="footer_element" href="">
            FAQs
          </a>
          <a className="footer_element" href="">
            Contact Us
          </a>
        </div>
        <div className="join_us">
          <h4 className="footer_heading join_community">
            Join the community <br /> of Achievers
          </h4>
          <Button label="Join as a Student" />
        </div>
      </div>
      <hr className="text-light" />
      <div className="copyright">
        <p className="copyright_heading">Made with Love <img src="/vector12.svg" alt="" /> <br /> For CTAEians by CTAEians</p>
        <p className="copyright_para">AchieveMate Copyright © 2023-2024</p>
      </div>
    </div>
  );
}

export default Footer;
