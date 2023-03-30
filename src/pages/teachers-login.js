import { useEffect } from "react";
import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import styles from "./teachers-login.module.css";

const TeachersLogin = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <main className={styles.teachersLogin}>
      <main className={styles.teachersLoginChild} />
      <article className={styles.yourStudentsYourPrideParent}>
        <strong
          className={styles.yourStudentsYourContainer}
          data-animate-on-scroll
        >
          <p className={styles.yourStudents}>Your Students,</p>
          <p className={styles.yourPride}>Your Pride</p>
        </strong>
        <strong className={styles.verifyYourStudents} data-animate-on-scroll>
          Verify your students' achievements and acknowledge them. Every student
          deserves to be recognized for their achievements.
        </strong>
      </article>
      <main className={styles.teachersLoginItem} />
      <main className={styles.teachersDashboardParent}>
        <strong className={styles.teachersDashboard}>
          Teacher’s Dashboard
        </strong>
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
        <TextField
          className={styles.groupTextfield}
          sx={{ width: 391 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Email Id"
          size="medium"
          margin="none"
        />
        <footer className={styles.thankYouForYourTimeEffoParent}>
          <strong
            className={styles.thankYouFor}
          >{`Thank you for your time & effort`}</strong>
          <article className={styles.mdicardsHeart}>
            <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
          </article>
        </footer>
      </main>
      <article className={styles.meetTheTeamParent}>
        <strong className={styles.meetTheTeam}>Meet the Team</strong>
        <img className={styles.lineIcon} alt="" src="/line-4@2x.png" />
      </article>
      <address className={styles.rectangleParent}>
        <article className={styles.rectangleArticle} />
        <strong className={styles.sourabhPurbia}>
          <p className={styles.yourStudents}>Sourabh</p>
          <p className={styles.yourStudents}>Purbia</p>
        </strong>
      </address>
      <address className={styles.rectangleGroup}>
        <article className={styles.rectangleArticle} />
        <strong className={styles.ashishDev}>
          <p className={styles.yourStudents}>Ashish</p>
          <p className={styles.yourStudents}>Dev</p>
        </strong>
      </address>
      <address className={styles.rectangleContainer}>
        <article className={styles.rectangleArticle} />
        <strong className={styles.pankajKumawat}>
          <p className={styles.yourStudents}>Pankaj</p>
          <p className={styles.yourStudents}>Kumawat</p>
        </strong>
      </address>
      <address className={styles.groupAddress}>
        <article className={styles.rectangleArticle} />
        <strong className={styles.kuldeepKatara}>
          <p className={styles.yourStudents}>Kuldeep</p>
          <p className={styles.yourStudents}>Katara</p>
        </strong>
      </address>
      <address className={styles.rectangleParent1}>
        <article className={styles.rectangleArticle} />
        <strong className={styles.sourabhPurbia}>
          <p className={styles.yourStudents}>Kahnav</p>
          <p className={styles.yourStudents}>Sukhwal</p>
        </strong>
      </address>
    </main>
  );
};

export default TeachersLogin;
