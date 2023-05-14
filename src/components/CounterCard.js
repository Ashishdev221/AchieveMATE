import React from "react";
import "./CounterCard.css";

function CounterCard({count,title,image}) {
  return (
    <div className="counter_card flex-container">
      <img className="counter_img" src={image} alt="" />
      <div className="counter_section">
        <span className="counter_num">{count}</span>
        <br />
        <span className="counter_info">{title}</span>
      </div>
    </div>
  );
}

export default CounterCard;
