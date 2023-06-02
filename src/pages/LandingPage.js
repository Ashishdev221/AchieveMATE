import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LandingPage.css";
import CounterCard from "../components/CounterCard";
import ContactUs from "../components/ContactUs";
import Button from "../components/Button";
import WhyAchieve from "../components/WhyAchieve";
import TeamImageCard from "../components/TeamImageCard";
function LandingPage() {
  return (
    <div className="landing_page">
      <div className="hero_section">
        <Header />
        {/* <div className="header flex-container">
          <Link to="/">
            <img
              className="header_logo"
              src="/main09-1@2x.png"
              alt="Achievemate"
            />
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
          <Button  name="Login as a Teacher"/>
        </div> */}
        <div className="flex-container hero_section_main">
          <div className="hero_section_left">
            <h1 className="hero_section_heading">
              Join the community <br /> of{" "}
              <span className="yellow_col">Achievers</span>.
            </h1>
            <p className="hero_section_para">
              An Achievement sharing portal for College of <br /> Technology and
              Engineering students.
            </p>
            <div
              className="flex-container"
              style={{ justifyContent: "space-around" }}
            >
              <Button
                label="Join as a Student"
                className="hero_button button"
                url="/signup"
              />
              <Button
                label=" Login In"
                className="hero_button button"
                url="/login"
                style={{textWrap:false}}
              />
              {/* <button
                type="button"
                class="btn btn-outline-warning banner_button"
                url="/login"
                style={{width:'fit-content',height:'fit-content'}}
              >
              
              </button> */}
            </div>
          </div>
          <img
            className="hero_img"
            src="/successfulastronautgotfirstprizetrophy3drendering-1@2x.png"
            alt=""
          />
        </div>
      </div>
      <div className="about">
        <div className="counter flex-container">
          <CounterCard image={"/vector2.svg"} title={"Achievers"} count={"8"} />
          <CounterCard
            image={"/achievement.svg"}
            title={"Achievements"}
            count={"26"}
          />
          <CounterCard image={"/courses.svg"} title={"Courses"} count={"0"} />
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
        <WhyAchieve />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <h1 className="contact_us_head" style={{ marginLeft: "130px" }}>
          Meet The Team
        </h1>
        <div
          className="flex-container team_cards"
          style={{ justifyContent: "space-around" }}
        >
          <TeamImageCard
            firstName="Sourabh"
            lastName="Purbia"
            img="./passport-pic-2@2x.png"
          />
          <TeamImageCard
            firstName="Ashish"
            lastName="Dev"
            img="./ashish2.png"
          />
          <TeamImageCard
            firstName="Pankaj"
            lastName="Kumawat"
            img="./pankaj2.png"
          />
          <TeamImageCard
            firstName="Kanhav"
            lastName="Sukhwal"
            img="./kanhav2.png"
          />
          <TeamImageCard
            firstName="Kuldeep"
            lastName="Katara"
            img="./kuldeep.jpeg"
          />
        </div>
      </div>
      <div className="get_in_touch">
        <div className="get_in_touch_heading">Get in Touch</div>
        <div className="flex-container get_in_touch_container">
          <div className="d-flex align-items-center flex-column">
            <div className="get_in_touch_img mb-3">
              <img src="/vector9.svg" alt="" />
            </div>
            <div>
              <h4 className="get_in_touch_info_head">Email Id</h4>
              <p className="get_in_touch_info">achievemate@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center flex-column">
            <div className="get_in_touch_img mb-3">
              <img src="/vector9.svg" alt="" />
            </div>
            <div>
              <h4 className="get_in_touch_info_head">Phone Number</h4>
              <p className="get_in_touch_info">+91 8619898257</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="meet_the_team">
          <h3 className="team_heading">Meet the Team</h3>
          <hr className="hr_login" />
          <div className="flex-container team_cards">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div> */}

      <Footer />
    </div>
  );
}

export default LandingPage;
