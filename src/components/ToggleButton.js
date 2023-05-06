import React, { useState } from 'react';
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <FormControlLabel
    control={
      <Switch
        checked={isChecked}
        onChange={handleToggle}
        name="switch1"
      />
    }
    label={isChecked ? "ON" : "OFF"}
  />
  );
}

export default ToggleButton;