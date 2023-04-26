import React from "react";
import "./Badge.css";

function Badge({ label }) {
  var backColor =
    label === "Approved"
      ? "rgba(24, 243, 33, 0.3)"
      : label === "Rejected"
      ? " rgba(243, 24, 24, 0.3)"
      : "rgba(243, 142, 24, 0.3)";
  return (
    <div className="badge" style={{ backgroundColor: backColor }}>
      {label}
    </div>
  );
}

export default Badge;
