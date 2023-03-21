import {
  TextField,
  InputAdornment,
  Icon,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./AccountForm.module.css";

const AccountForm = () => {
  return (
    <main className={styles.createYourAccountParent}>
      <strong className={styles.createYourAccount}>Create your account</strong>
      <TextField
        className={styles.frameChild}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Name"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.frameItem}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Enrollment number"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.frameInner}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Password"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.frameTextfield}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Confirm Password"
        size="medium"
        margin="none"
      />
      <div className={styles.rectangleParent}>
        <FormControlLabel
          className={styles.rectangleFormcontrollabel}
          label=""
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
        <Link className={styles.iHaveAcceptedContainer} to="/login-page-1">
          <span>{`I have accepted the `}</span>
          <span className={styles.termsConditions}>{`terms & conditions`}</span>
        </Link>
      </div>
      <Button
        className={styles.frameButton}
        sx={{ width: 391 }}
        variant="contained"
        color="primary"
      >
        Sign Up
      </Button>
      <div className={styles.lineWrapper}>
        <img className={styles.lineIcon} alt="" src="/line-2@2x.png" />
      </div>
      <Link className={styles.alreadyHaveAnContainer} to="/login-page-1">
        <span>{`Already have an account? `}</span>
        <span className={styles.loginHere}>Login here</span>
      </Link>
    </main>
  );
};

export default AccountForm;
