import React, { useState } from "react";
import "./ExpandCollapse.css";

function ExpandCollapse(props) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="expand-collapse">
      <div className="expand-collapse-header" onClick={toggleOpen}>
        <p className="title-style">{props.title}</p>
        <button className="expand-collapse-button">
          {open ? (
            <img src="/downArrow.svg" width={"20px"} height={"20px"} />
          ) : (
            <img src="/upArraow.svg" width={"20px"} height={"20px"} />
          )}
        </button>
      </div>
      {open && <div className="expand-collapse-content">{props.children}</div>}
    </div>
  );
}

export default ExpandCollapse;
