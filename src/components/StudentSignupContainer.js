import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./StudentSignupContainer.module.css";

const StudentSignupContainer = ({ ofAchieversTop, ofAchieversLeft }) => {
  const frameArticleStyle = useMemo(() => {
    return {
      top: ofAchieversTop,
      left: ofAchieversLeft,
    };
  }, [ofAchieversTop, ofAchieversLeft]);

  return (
    <article className={styles.groupWrapper} style={frameArticleStyle}>
      <article className={styles.groupParent}>
        <Button
          className={styles.groupChild}
          sx={{ width: 267 }}
          variant="contained"
          color="primary"
          size="large"
          href="/login-page-1"
        >
          Join as a Student
        </Button>
        <article className={styles.joinTheCommunityOfAchieverParent}>
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
