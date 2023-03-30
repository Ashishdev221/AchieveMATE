import { TextField, InputAdornment, Icon } from "@mui/material";
import styles from "./RectangleComponent.module.css";

const RectangleComponent = () => {
  return (
    <TextField
      className={styles.landingPageChild}
      sx={{ width: 613 }}
      color="primary"
      variant="filled"
      type="email"
      label="Email"
      size="medium"
      margin="none"
    />
  );
};

export default RectangleComponent;
