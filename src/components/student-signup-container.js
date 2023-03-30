import { useMemo, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./student-signup-container.module.css";

const StudentSignupContainer = ({ ofAchieversTop, ofAchieversLeft }) => {
  const frameArticleStyle = useMemo(() => {
    return {
      top: ofAchieversTop,
      left: ofAchieversLeft,
    };
  }, [ofAchieversTop, ofAchieversLeft]);

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
    <article className={styles.groupWrapper} style={frameArticleStyle}>
      <article className={styles.groupParent}>
        <Button
          className={styles.groupChild}
          sx={{ width: 267 }}
          variant="contained"
          color="primary"
          size="large"
        >
          Join as a Student
        </Button>
        <article
          className={styles.joinTheCommunityOfAchieverParent}
          data-animate-on-scroll
        >
          <strong className={styles.joinTheCommunityContainer}>
            <p className={styles.joinTheCommunity}>Join the community</p>
            <p className={styles.joinTheCommunity}>
              <span>{`of `}</span>
              <span className={styles.achievers}>Achievers</span>
              <span className={styles.span}>.</span>
            </p>
          </strong>
          <strong className={styles.anAchievementSharing}>
            An Achievement sharing portal for College of Technology and
            Engineering students.
          </strong>
        </article>
      </article>
    </article>
  );
};

export default StudentSignupContainer;
