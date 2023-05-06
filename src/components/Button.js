import React from "react";
import "./Button.css";

function Button({ label, id, className, url }) {
  return (
    <div className={className ? className : "button"} id={id ? id : ""}>
      <a href={url}>{label}</a>
    </div>
  );
}

export default Button;
