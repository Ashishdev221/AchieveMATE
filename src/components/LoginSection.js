import { Button } from "@mui/material";
import StudentSignupContainer from "./StudentSignupContainer";
import styles from "./LoginSection.module.css";

const LoginSection = () => {
  return (
    <article className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <Button
          className={styles.groupItem}
          sx={{ width: 283 }}
          variant="contained"
          color="primary"
        >
          Login as a Teacher
        </Button>
        <img className={styles.main091Icon} alt="" src="/main09-1@2x.png" />
        <b className={styles.contactUs}>Contact Us</b>
        <b className={styles.team}>Team</b>
      </div>
      <article className={styles.frameWrapper}>
        <StudentSignupContainer />
      </article>
    </article>
  );
};

export default LoginSection;
