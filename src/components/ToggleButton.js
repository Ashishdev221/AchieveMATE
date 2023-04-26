import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} checked={isChecked} />
      <span className="slider"></span>
      <span className="on-label">ON</span>
      <span className="off-label">OFF</span>
    </label>
  );
}

export default ToggleButton;