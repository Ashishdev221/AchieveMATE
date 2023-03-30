import { useEffect } from "react";
import AccountForm from "../components/AccountForm";
import styles from "./SignUpPage1.module.css";

const SignUpPage1 = () => {
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
    <main className={styles.signUpPage1}>
      <main className={styles.signUpPage1Child} />
      <article
        className={styles.itsYourAchievementShowcasParent}
        data-animate-on-scroll
      >
        <h1 className={styles.itsYourAchievementContainer}>
          <p className={styles.itsYourAchievement}>
            <span className={styles.itsYour}>{`It's Your `}</span>
            <span className={styles.achievement}>Achievement</span>
            <span>,</span>
          </p>
          <p className={styles.itsYourAchievement}>Showcase it.</p>
        </h1>
        <strong className={styles.beProudOf}>
          Be proud of your achievements! Sign up now and start sharing your
          achievements.
        </strong>
      </article>
      <main className={styles.signUpPage1Item} />
      <main className={styles.frameParent}>
        <article className={styles.logo011Parent}>
          <img className={styles.logo011Icon} alt="" src="/logo01-1@2x.png" />
          <strong className={styles.anAchievementSharing}>
            An Achievement Sharing Portal
          </strong>
        </article>
        <AccountForm />
      </main>
      <article className={styles.meetTheTeamParent}>
        <div className={styles.meetTheTeam}>Meet the Team</div>
        <img className={styles.frameChild} alt="" src="/line-4@2x.png" />
      </article>
      <address className={styles.sourabhPurbiaWrapper} id="frame3" frame3="45">
        <strong className={styles.sourabhPurbia} id="text3" text3>
          <p className={styles.itsYourAchievement}>Sourabh</p>
          <p className={styles.itsYourAchievement}>Purbia</p>
        </strong>
      </address>
      <div className={styles.ashishDevWrapper}>
        <strong className={styles.sourabhPurbia} id="text5" text5>
          <p className={styles.itsYourAchievement}>Ashish</p>
          <p className={styles.itsYourAchievement}>Dev</p>
        </strong>
      </div>
      <address className={styles.pankajKumawatWrapper} id="frame2" frame2="45">
        <strong className={styles.sourabhPurbia} id="text4" text4>
          <p className={styles.itsYourAchievement}>Pankaj</p>
          <p className={styles.itsYourAchievement}>Kumawat</p>
        </strong>
      </address>
      <address className={styles.kuldeepKataraWrapper} id="frame2" frame2="45">
        <strong className={styles.sourabhPurbia} id="text2" text2>
          <p className={styles.itsYourAchievement}>Kuldeep</p>
          <p className={styles.itsYourAchievement}>Katara</p>
        </strong>
      </address>
      <address className={styles.kahnavSukhwalWrapper} id="frame" frame="45">
        <strong className={styles.sourabhPurbia} id="text1" text1>
          <p className={styles.itsYourAchievement}>Kahnav</p>
          <p className={styles.itsYourAchievement}>Sukhwal</p>
        </strong>
      </address>
    </main>
  );
};

export default SignUpPage1;
