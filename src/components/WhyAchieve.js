import React from "react";
import "./WhyAchieve.css";
import WhyAchieveCard from "./WhyAchieveCard";

function WhyAchieve() {
  return (
    <div className="why_achieve">
      <h1 className="why_achieve_heading">Why AchieveMATE?</h1>
      <div className="d-flex justify-content-around">
        <div>
          <WhyAchieveCard heading={"Safe & Secure"} para={"Secure and reliable Achievement sharing platform for students."}/>
          <WhyAchieveCard heading={"Easy to use"} para={"User-friendly interface to showcase and manage your certificates."}/>
        </div>
        <img
          className="why_achieve_img"
          src="/3drenderspacemanastronautstandinggratefulnamasteyogapose3dillustrationdesign-1@2x.png"
          alt=""
        />
        <div>
        <WhyAchieveCard heading={"Quick Share"} para={"Quickly share your achievements with your peers and employers."}/>
        <WhyAchieveCard heading={"One-stop Solution"} para={"Accomplish, store, and share your achievements at one place."}/>
        </div>
      </div>
    </div>
  );
}

export default WhyAchieve;
