import { TextField, InputAdornment, Icon, Button } from "@mui/material";
import TeacherLoginSection from "../components/TeacherLoginSection";
import ContainerWrapper from "../components/ContainerWrapper";
import QuickShareContainer from "../components/QuickShareContainer";
import RectangleComponent from "../components/RectangleComponent";
import AboutArticle from "../components/about-article";
import styles from "./LandingPage1.module.css";

const LandingPage1 = () => {
  return (
    <main className={styles.landingPage}>
      <TeacherLoginSection />
      <ContainerWrapper />
      <article className={styles.dRenderAstronautWithQuestiParent}>
        <img
          className={styles.dRenderAstronautWithQuestiIcon}
          alt=""
          src="/3drenderastronautwithquestionmarkthinkdisappointmenttiredcaucasiangestures3dillustrationdesign-1@2x.png"
        />
        <article className={styles.frameParent}>
          <article className={styles.whatIsAchievemateWrapper}>
            <strong className={styles.whatIsAchievemate}>
              What is AchieveMATE?
            </strong>
          </article>
          <div className={styles.achievemateIsAn}>
            Achievemate is an achievement sharing platform designed exclusively
            for students of the College of Technology and Engineering. While
            providing a safe and reliable platform to store and manage your
            certificates.
          </div>
        </article>
      </article>
      <article className={styles.landingPageChild} />
      <article className={styles.landingPageItem} />
      <article className={styles.whyAchievemateWrapper}>
        <strong className={styles.whatIsAchievemate}>Why AchieveMATE?</strong>
      </article>
      <img
        className={styles.dRenderSpacemanAstronautStIcon}
        alt=""
        src="/3drenderspacemanastronautstandinggratefulnamasteyogapose3dillustrationdesign-1@2x.png"
      />
      <article className={styles.frameGroup}>
        <article className={styles.frameWrapper}>
          <article className={styles.safeSecureParent}>
            <strong className={styles.safeSecure}>{`Safe & Secure`}</strong>
            <strong className={styles.secureAndReliableContainer}>
              <p className={styles.secureAndReliable}>Secure and reliable</p>
              <p className={styles.secureAndReliable}>Achievement sharing</p>
              <p className={styles.secureAndReliable}>platform for students.</p>
            </strong>
          </article>
        </article>
        <article className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <article className={styles.mingcutesafetyCertificateFi}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </article>
        </article>
      </article>
      <article className={styles.frameContainer}>
        <QuickShareContainer />
        <article className={styles.rectangleParent}>
          <article className={styles.groupChild} />
          <article className={styles.materialSymbolsscreenShare}>
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </article>
        </article>
      </article>
      <article className={styles.groupArticle}>
        <QuickShareContainer />
        <article className={styles.rectangleParent}>
          <article className={styles.groupChild} />
          <article className={styles.materialSymbolsscreenShare}>
            <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
            <img
              className={styles.riuserSmileFillChild}
              alt=""
              src="/ellipse-1.svg"
            />
            <img
              className={styles.riuserSmileFillItem}
              alt=""
              src="/ellipse-1.svg"
            />
          </article>
        </article>
      </article>
      <article className={styles.frameParent1}>
        <QuickShareContainer />
        <article className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-19@2x.png"
          />
        </article>
      </article>
      <article className={styles.mdiidea}>
        <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
      </article>
      <img
        className={styles.dRenderAstronautCallingGesIcon}
        alt=""
        src="/3drenderastronautcallinggesturewitholdtelephone3dillustrationdesign-1@2x.png"
      />
      <strong className={styles.getInTouch}>
        Get in touch with us for any queries or feedback. We would love to hear
        from you!
      </strong>
      <article
        className={styles.landingPageInner}
        data-scroll-to="groupContainer1"
      >
        <article className={styles.whatIsAchievemateWrapper}>
          <b className={styles.contactUs}>Contact Us</b>
        </article>
      </article>
      <RectangleComponent />
      <div className={styles.email}>Email*</div>
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 613 }}
        color="primary"
        variant="filled"
        type="text"
        label="Phone"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.landingPageChild1}
        sx={{ width: 613 }}
        color="primary"
        variant="filled"
        multiline
        label="Message"
        margin="none"
      />
      <Button
        className={styles.groupButton}
        sx={{ width: 152 }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      <article className={styles.vectorParent}>
        <img className={styles.groupChild1} alt="" src="/vector-1.svg" />
        <img className={styles.groupChild2} alt="" src="/vector-2.svg" />
      </article>
      <div className={styles.phone}>Phone</div>
      <div className={styles.yourMessageHere}>Your message here*</div>
      <article className={styles.mdimessageProcessing}>
        <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
      </article>
      <div className={styles.phphoneFill}>
        <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
      </div>
      <div className={styles.mdiemail}>
        <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
      </div>
      <article className={styles.groupParent}>
        <article className={styles.rectangleParent1}>
          <article className={styles.rectangleArticle} />
          <article className={styles.mdiemail1}>
            <img className={styles.vectorIcon5} alt="" src="/vector9.svg" />
          </article>
          <a className={styles.emailIdParent}>
            <strong className={styles.emailId}>Email Id</strong>
            <strong className={styles.achievemategmailcom}>
              achievemate@gmail.com
            </strong>
          </a>
        </article>
        <article className={styles.rectangleParent2}>
          <article className={styles.groupChild3} />
          <img
            className={styles.phphoneFillIcon}
            alt=""
            src="/phphonefill1.svg"
          />
          <article className={styles.phoneNumberParent}>
            <strong className={styles.phoneNumber}>Phone Number</strong>
            <strong className={styles.strong}>+91 8619898257</strong>
          </article>
        </article>
      </article>
      <article className={styles.getInTouchWrapper}>
        <strong className={styles.whatIsAchievemate}>Get in Touch</strong>
      </article>
      <img className={styles.lineIcon} alt="" src="/line-5@2x.png" />
      <article
        className={styles.landingPageInner1}
        data-scroll-to="groupContainer"
      >
        <article className={styles.whatIsAchievemateWrapper}>
          <strong className={styles.whatIsAchievemate}>Meet the Team</strong>
        </article>
      </article>
      <article className={styles.landingPageChild2} />
      <article className={styles.landingPageChild3} />
      <article className={styles.landingPageChild4} />
      <article className={styles.landingPageChild5} />
      <article className={styles.landingPageChild6} />
      <strong className={styles.sourabhPurbia}>
        <p className={styles.secureAndReliable}>Sourabh</p>
        <p className={styles.secureAndReliable}>Purbia</p>
      </strong>
      <strong className={styles.ashishDev}>
        <p className={styles.secureAndReliable}>Ashish</p>
        <p className={styles.secureAndReliable}>Dev</p>
      </strong>
      <strong className={styles.pankajKumawat}>
        <p className={styles.secureAndReliable}>Pankaj</p>
        <p className={styles.secureAndReliable}>Kumawat</p>
      </strong>
      <strong className={styles.kuldeepKatara}>
        <p className={styles.secureAndReliable}>Kuldeep</p>
        <p className={styles.secureAndReliable}>Katara</p>
      </strong>
      <strong className={styles.kanhavSukhwal}>
        <p className={styles.secureAndReliable}>Kanhav</p>
        <p className={styles.secureAndReliable}>Sukhwal</p>
      </strong>
      <main className={styles.rectangleMain} />
      <AboutArticle about="About" aboutUs="About Us" team="Team" />
      <AboutArticle
        about="Support"
        aboutUs="FAQs"
        team="Contact Us"
        propLeft="657px"
        propWidth="122px"
        propWidth1="122px"
      />
      <article className={styles.main101Parent}>
        <img className={styles.main101Icon} alt="" src="/main10-1@2x.png" />
        <strong className={styles.anAchievementSharing}>
          An Achievement Sharing Portal
        </strong>
      </article>
      <article className={styles.groupContainer}>
        <article className={styles.achievemateCopyrightParent}>
          <strong
            className={styles.achievemateCopyright}
          >{`AchieveMate Copyright `}</strong>
          <strong className={styles.strong1}>2023-2024</strong>
          <article className={styles.tablercopyright}>
            <article className={styles.group}>
              <img className={styles.vectorIcon7} alt="" src="/vector10.svg" />
              <img className={styles.vectorIcon8} alt="" src="/vector11.svg" />
            </article>
          </article>
        </article>
        <article className={styles.groupParent1}>
          <article className={styles.mdicardsHeartParent}>
            <article className={styles.mdicardsHeart}>
              <img className={styles.vectorIcon9} alt="" src="/vector12.svg" />
            </article>
            <strong className={styles.madeWithLove}>Made with Love</strong>
          </article>
          <strong className={styles.forCtaeiansBy}>
            For CTAEians by CTAEians
          </strong>
        </article>
      </article>
      <article className={styles.groupParent2}>
        <Button
          className={styles.groupChild4}
          sx={{ width: 267 }}
          variant="contained"
          color="primary"
          size="large"
        >
          Join as a Student
        </Button>
        <strong className={styles.joinTheCommunityContainer}>
          <p className={styles.secureAndReliable}>Join the community</p>
          <p className={styles.secureAndReliable}>of Achievers</p>
        </strong>
      </article>
      <img className={styles.landingPageChild7} alt="" src="/line-6@2x.png" />
    </main>
  );
};

export default LandingPage1;
