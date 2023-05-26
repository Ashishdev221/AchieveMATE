import React from "react";
import "./Button.css";

function Button({ label, id, className, url,onClick }) {
  return (
    <div className={className ? className : "button"} id={id ? id : ""} onClick={onClick}>
      <a className="button-link" href={url}>{label}</a>
    </div>
  );
}

export default Button;
