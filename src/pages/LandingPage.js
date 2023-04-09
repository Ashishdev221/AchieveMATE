import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LandingPage.css";
import CounterCard from "../components/CounterCard";
import ContactUs from "../components/ContactUs";
function LandingPage() {
  return (
    <div className="landing_page">
      {/* <Header /> */}
      <div className="hero_section flex-container">
        <div className="hero_section_left">
          <h1 className="hero_section_heading">
            Join the community of <span className="yellow_col">Achievers</span>.
          </h1>
          <p className="hero_section_para">
            An Achievement sharing portal for College of Technology and
            Engineering students.
          </p>
        </div>
        <img
          src="/successfulastronautgotfirstprizetrophy3drendering-1@2x.png"
          alt=""
        />
      </div>
      <div className="about">
        <div className="counter flex-container">
          <CounterCard />
          <CounterCard />
          <CounterCard />
        </div>
        <div className="about_info flex-container">
          <div className="about_left">
            <div className="about_heading">What is AchieveMATE?</div>
            <div className="about_para">
              <p>
                Achievemate is an achievement sharing platform designed
                exclusively for students of the College of Technology and
                Engineering. While providing a safe and reliable platform to
                store and manage your certificates.
              </p>
            </div>
          </div>
          <div className="about_right">
            <img
              className="about_img"
              alt=""
              src="/3drenderastronautwithquestionmarkthinkdisappointmenttiredcaucasiangestures3dillustrationdesign-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
      <div className="get_in_touch">
        <div className="get_in_touch_heading">Get in Touch</div>
        <div className="flex-container get_in_touch_container">
          <div>
            <div className="get_in_touch_img">
              <img src="/vector9.svg" alt="" />
            </div>
            <div>
              <h4 className="get_in_touch_info_head">Email Id</h4>
              <p className="get_in_touch_info">achievemate@gmail.com</p>
            </div>
          </div>
          <hr />
          <div>
            <div className="get_in_touch_img">
              <img src="/vector9.svg" alt="" />
            </div>
            <div>
              <h4 className="get_in_touch_info_head">Phone Number</h4>
              <p className="get_in_touch_info">+91 8619898257</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
