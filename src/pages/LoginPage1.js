import { useEffect } from "react";
import WelcomeContainer from "../components/WelcomeContainer";
import TeamContainer from "../components/TeamContainer";
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
    <div className={styles.loginPage1}>
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
      <WelcomeContainer />
      <article className={styles.meetTheTeamParent}>
        <strong className={styles.meetTheTeam}>Meet the Team</strong>
        <img className={styles.groupChild} alt="" src="/line-4@2x.png" />
      </article>
      <TeamContainer teamMembers="Sourabh" teamMemberNames="Purbia" />
      <TeamContainer
        teamMembers="Ashish"
        teamMemberNames="Dev"
        propLeft="208px"
        propLeft1="26px"
      />
      <TeamContainer
        teamMembers="Pankaj"
        teamMemberNames="Kumawat"
        propLeft="316px"
        propLeft1="19px"
      />
      <TeamContainer
        teamMembers="Kuldeep"
        teamMemberNames="Katara"
        propLeft="424px"
        propLeft1="23px"
      />
      <TeamContainer
        teamMembers="Kahnav"
        teamMemberNames="Sukhwal"
        propLeft="532px"
        propLeft1="22px"
      />
    </div>
  );
};

export default LoginPage1;
