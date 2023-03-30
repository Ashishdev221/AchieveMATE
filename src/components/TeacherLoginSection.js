import { useCallback } from "react";
import { Button } from "@mui/material";
import StudentSignupContainer from "./student-signup-container";
import styles from "./TeacherLoginSection.module.css";

const TeacherLoginSection = () => {
  const onContactUsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTeamClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <main className={styles.rectangleParent}>
      <section className={styles.groupChild} />
      <article className={styles.groupParent}>
        <Button
          className={styles.groupItem}
          sx={{ width: 283 }}
          variant="contained"
          color="primary"
        >
          Login as a Teacher
        </Button>
        <img className={styles.main091Icon} alt="" src="/main09-1@2x.png" />
        <Button
          className={styles.contactUs}
          variant="text"
          color="primary"
          size="large"
          onClick={onContactUsClick}
        >
          Contact Us
        </Button>
        <Button
          className={styles.team}
          variant="text"
          color="primary"
          size="large"
          onClick={onTeamClick}
        >
          Team
        </Button>
      </article>
      <article className={styles.maskGroupParent}>
        <article className={styles.maskGroup}>
          <img
            className={styles.successfulAstronautGotFirstIcon}
            alt=""
            src="/successfulastronautgotfirstprizetrophy3drendering-1@2x.png"
          />
        </article>
        <StudentSignupContainer />
      </article>
    </main>
  );
};

export default TeacherLoginSection;
