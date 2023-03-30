import { useEffect } from "react";
import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LoginPage1.module.css";

const LoginPage1 = () => {
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
    <main className={styles.loginPage1}>
      <main className={styles.loginPage1Child} />
      <article className={styles.itsYourAchievementShowcasParent}>
        <strong
          className={styles.itsYourAchievementContainer}
          data-animate-on-scroll
        >
          <p className={styles.itsYourAchievement}>
            <span className={styles.itsYour}>{`It's Your `}</span>
            <span className={styles.achievement}>Achievement</span>
            <span>,</span>
          </p>
          <p className={styles.itsYourAchievement}>Showcase it.</p>
        </strong>
        <strong className={styles.beProudOf} data-animate-on-scroll>
          Be proud of your achievements! Login now and start sharing your
          achievements.
        </strong>
      </article>
      <main className={styles.loginPage1Item} />
      <main className={styles.helloWelcomeBackParent}>
        <strong className={styles.helloWelcome}>Hello ! Welcome back</strong>
        <article className={styles.logo011Parent}>
          <img className={styles.logo011Icon} alt="" src="/logo01-1@2x.png" />
          <strong className={styles.anAchievementSharing}>
            An Achievement Sharing Portal
          </strong>
        </article>
        <TextField
          className={styles.frameChild}
          sx={{ width: 391 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Password"
          size="medium"
          margin="none"
        />
        <FormControlLabel
          className={styles.frameItem}
          label="Remember me"
          labelPlacement="end"
          control={<Checkbox color="primary" />}
        />
        <article className={styles.forgotPasswordWrapper}>
          <strong className={styles.forgotPassword}>Forgot Password?</strong>
        </article>
        <Button
          className={styles.frameInner}
          sx={{ width: 391 }}
          variant="contained"
          color="primary"
          size="large"
        >
          Login
        </Button>
        <div className={styles.lineWrapper}>
          <img className={styles.lineIcon} alt="" src="/line-2@2x.png" />
        </div>
        <TextField
          className={styles.frameTextfield}
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
      <article className={styles.meetTheTeamParent}>
        <strong className={styles.meetTheTeam}>Meet the Team</strong>
        <img className={styles.frameChild1} alt="" src="/line-4@2x.png" />
      </article>
      <address className={styles.rectangleParent}>
        <article className={styles.rectangleArticle} />
        <article className={styles.frameChild2} />
        <strong className={styles.sourabhPurbia}>
          <p className={styles.itsYourAchievement}>Sourabh</p>
          <p className={styles.itsYourAchievement}>Purbia</p>
        </strong>
      </address>
      <address className={styles.rectangleGroup}>
        <article className={styles.rectangleArticle} />
        <article className={styles.frameChild2} />
        <strong className={styles.ashishDev}>
          <p className={styles.itsYourAchievement}>Ashish</p>
          <p className={styles.itsYourAchievement}>Dev</p>
        </strong>
      </address>
      <address className={styles.rectangleContainer}>
        <article className={styles.rectangleArticle} />
        <article className={styles.frameChild2} />
        <strong className={styles.pankajKumawat}>
          <p className={styles.itsYourAchievement}>Pankaj</p>
          <p className={styles.itsYourAchievement}>Kumawat</p>
        </strong>
      </address>
      <address className={styles.frameAddress}>
        <article className={styles.rectangleArticle} />
        <article className={styles.frameChild2} />
        <strong className={styles.kuldeepKatara}>
          <p className={styles.itsYourAchievement}>Kuldeep</p>
          <p className={styles.itsYourAchievement}>Katara</p>
        </strong>
      </address>
      <address className={styles.rectangleParent1}>
        <article className={styles.rectangleArticle} />
        <article className={styles.frameChild2} />
        <strong className={styles.sourabhPurbia}>
          <p className={styles.itsYourAchievement}>Kahnav</p>
          <p className={styles.itsYourAchievement}>Sukhwal</p>
        </strong>
      </address>
    </main>
  );
};

export default LoginPage1;
