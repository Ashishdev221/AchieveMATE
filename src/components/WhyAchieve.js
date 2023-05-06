import React from "react";
import "./WhyAchieve.css";
import WhyAchieveCard from "./WhyAchieveCard";

function WhyAchieve() {
  return (
    <div className="why_achieve">
      <h1 className="why_achieve_heading">Why AchieveMATE?</h1>
      <div className="d-flex justify-content-around">
        <div>
          <WhyAchieveCard />
          <WhyAchieveCard />
        </div>
        <img
          className="why_achieve_img"
          src="/3drenderspacemanastronautstandinggratefulnamasteyogapose3dillustrationdesign-1@2x.png"
          alt=""
        />
        <div>
          <WhyAchieveCard />
          <WhyAchieveCard />
        </div>
      </div>
    </div>
  );
}

export default WhyAchieve;
