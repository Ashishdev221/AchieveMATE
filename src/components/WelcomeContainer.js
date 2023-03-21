import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./WelcomeContainer.module.css";

const WelcomeContainer = () => {
  return (
    <main className={styles.helloWelcomeBackParent}>
      <strong className={styles.helloWelcome}>Hello ! Welcome back</strong>
      <article className={styles.logo011Parent}>
        <img className={styles.logo011Icon} alt="" src="/logo01-1@2x.png" />
        <strong className={styles.anAchievementSharing}>
          An Achievement Sharing Portal
        </strong>
      </article>
      <TextField
        className={styles.groupChild}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Password"
        size="medium"
        margin="none"
      />
      <FormControlLabel
        className={styles.groupItem}
        label="Remember me"
        labelPlacement="end"
        control={<Checkbox color="primary" />}
      />
      <article className={styles.forgotPasswordWrapper}>
        <strong className={styles.forgotPassword}>Forgot Password?</strong>
      </article>
      <Button
        className={styles.groupInner}
        sx={{ width: 391 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Login
      </Button>
      <div className={styles.lineParent}>
        <img className={styles.lineIcon} alt="" src="/line-2@2x.png" />
        <img className={styles.groupChild1} alt="" src="/line-2@2x.png" />
        <strong className={styles.or}>or</strong>
      </div>
      <TextField
        className={styles.groupTextfield}
        sx={{ width: 391 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Enrollment number"
        size="medium"
        margin="none"
      />
      <Link className={styles.dontHaveAnContainer} to="/sign-up-page-1">
        <span>{`Don’t have an account? `}</span>
        <span className={styles.createAccount}>Create Account</span>
      </Link>
    </main>
  );
};

export default WelcomeContainer;
