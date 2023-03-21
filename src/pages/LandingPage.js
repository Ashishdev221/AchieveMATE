import { Button } from "@mui/material";
import LoginSection from "../components/LoginSection";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <LoginSection />
      <b className={styles.sourabhPurbia}>
        <p className={styles.sourabh}>Sourabh</p>
        <p className={styles.sourabh}>Purbia</p>
      </b>
      <b className={styles.ashishDev}>
        <p className={styles.sourabh}>Ashish</p>
        <p className={styles.sourabh}>Dev</p>
      </b>
      <b className={styles.pankajKumawat}>
        <p className={styles.sourabh}>Pankaj</p>
        <p className={styles.sourabh}>Kumawat</p>
      </b>
      <b className={styles.kuldeepKatara}>
        <p className={styles.sourabh}>Kuldeep</p>
        <p className={styles.sourabh}>Katara</p>
      </b>
      <b className={styles.kanhavSukhwal}>
        <p className={styles.sourabh}>Kanhav</p>
        <p className={styles.sourabh}>Sukhwal</p>
      </b>
      <div className={styles.landingPageChild} />
      <div className={styles.aboutParent}>
        <b className={styles.about}>About</b>
        <div className={styles.aboutUsParent}>
          <div className={styles.about}>About Us</div>
          <div className={styles.team}>Team</div>
        </div>
      </div>
      <div className={styles.supportParent}>
        <b className={styles.about}>Support</b>
        <div className={styles.faqsParent}>
          <div className={styles.about}>FAQs</div>
          <div className={styles.team}>Contact Us</div>
        </div>
      </div>
      <div className={styles.main101Parent}>
        <img className={styles.main101Icon} alt="" src="/main10-1@2x.png" />
        <div className={styles.anAchievementSharing}>
          An Achievement Sharing Portal
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.achievemateCopyrightParent}>
          <div
            className={styles.achievemateCopyright}
          >{`AchieveMate Copyright `}</div>
          <div className={styles.div}>2023-2024</div>
          <img
            className={styles.tablercopyrightIcon}
            alt=""
            src="/tablercopyright.svg"
          />
        </div>
        <div className={styles.groupContainer}>
          <button className={styles.mdicardsHeartParent}>
            <img
              className={styles.mdicardsHeartIcon}
              alt=""
              src="/mdicardsheart.svg"
            />
            <div className={styles.madeWithLove}>Made with Love</div>
          </button>
          <div className={styles.forCtaeiansBy}>For CTAEians by CTAEians</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
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
        <b className={styles.joinTheCommunityContainer}>
          <p className={styles.sourabh}>Join the community</p>
          <p className={styles.sourabh}>of Achievers</p>
        </b>
      </div>
      <div className={styles.landingPageItem} />
    </div>
  );
};

export default LandingPage;
