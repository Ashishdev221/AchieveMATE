import React from "react";
import "./CounterCard.css";

function CounterCard() {
  return (
    <div className="counter_card flex-container">
      <img className="counter_img" src="/vector2.svg" alt="" />
      <div className="counter_section">
        <span className="counter_num">3000</span>
        <br />
        <span className="counter_info">Achievers</span>
      </div>
    </div>
  );
}

export default CounterCard;
