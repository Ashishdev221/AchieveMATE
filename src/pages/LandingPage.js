import { useEffect } from "react";
import { Button, Icon } from "@mui/material";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
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
    <main className={styles.homePageNewUser}>
      <section className={styles.homePageNewUserChild} />
      <section className={styles.homePageNewUserItem} />
      <section className={styles.homePageNewUserInner} />
      <section className={styles.rectangleSection} />
      <section className={styles.homePageNewUserChild1} />
      <address className={styles.rectangleParent}>
        <section className={styles.groupChild} />
        <div className={styles.aboutParent}>
          <b className={styles.about}>About</b>
          <address className={styles.aboutUsParent}>
            <div className={styles.about}>About Us</div>
            <div className={styles.team}>Team</div>
          </address>
        </div>
        <div className={styles.supportParent}>
          <b className={styles.about}>Support</b>
          <address className={styles.faqsParent}>
            <div className={styles.about}>FAQs</div>
            <div className={styles.team}>Contact Us</div>
          </address>
        </div>
        <article className={styles.main101Parent}>
          <img className={styles.main101Icon} alt="" src="/main10-1@2x.png" />
          <div className={styles.anAchievementSharing}>
            An Achievement Sharing Portal
          </div>
        </article>
        <address className={styles.groupParent}>
          <div className={styles.achievemateCopyrightParent}>
            <div
              className={styles.achievemateCopyright}
            >{`AchieveMate Copyright `}</div>
            <div className={styles.div}>2023-2024</div>
            <div className={styles.tablercopyright}>
              <address className={styles.group}>
                <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector11.svg"
                />
              </address>
            </div>
          </div>
          <address className={styles.groupContainer}>
            <button className={styles.mdicardsHeartParent}>
              <img
                className={styles.mdicardsHeartIcon}
                alt=""
                src="/mdicardsheart.svg"
              />
              <div className={styles.madeWithLove}>Made with Love</div>
            </button>
            <div className={styles.forCtaeiansBy}>For CTAEians by CTAEians</div>
          </address>
        </address>
        <div className={styles.groupDiv}>
          <Button
            className={styles.groupItem}
            sx={{ width: 185 }}
            variant="contained"
            color="primary"
            size="large"
            href="/login-page-1"
          >
            Refer now
          </Button>
          <b className={styles.about}>
            <p className={styles.referYourFriend}>Refer your Friend</p>
            <p className={styles.referYourFriend}>{`& Earn Reward`}</p>
          </b>
        </div>
        <img className={styles.groupInner} alt="" src="/line-6@2x.png" />
      </address>
      <section className={styles.ictwotoneSearchParent}>
        <img
          className={styles.ictwotoneSearchIcon}
          alt=""
          src="/ictwotonesearch.svg"
        />
        <img
          className={styles.icbaselineNotificationsIcon}
          alt=""
          src="/icbaselinenotifications.svg"
        />
        <img className={styles.main021Icon} alt="" src="/main02-1@2x.png" />
        <Button
          className={styles.groupButton}
          sx={{ width: 196 }}
          variant="contained"
          color="primary"
        >
          Upload
        </Button>
      </section>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-3.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <label className={styles.sourabhPurbia}>Sourabh Purbia</label>
      <b className={styles.uploadYourAchievement}>Upload Your Achievement</b>
      <b className={styles.achieversLeaderboard}>
        <p className={styles.referYourFriend}>Achiever’s</p>
        <p className={styles.referYourFriend}>Leaderboard</p>
      </b>
      <b className={styles.exploreCourses}>Explore Courses</b>
      <label className={styles.achievements}>0 Achievements</label>
      <Button
        className={styles.homePageNewUserChild2}
        sx={{ width: 233 }}
        variant="contained"
        color="primary"
      >
        My Dashboard
      </Button>
      <input className={styles.groupInput} type="file" />
      <Button
        className={styles.homePageNewUserChild3}
        sx={{ width: 167 }}
        variant="contained"
        color="primary"
      >
        Show all
      </Button>
      <Button
        className={styles.homePageNewUserChild4}
        sx={{ width: 167 }}
        variant="contained"
        color="primary"
      >
        Show all
      </Button>
      <div className={styles.lineDiv} />
      <div className={styles.gameIconsgraduateCapParent}>
        <img
          className={styles.gameIconsgraduateCap}
          alt=""
          src="/gameiconsgraduatecap.svg"
        />
        <div className={styles.computerScienceAnd}>
          Computer Science and Engineering
        </div>
      </div>
      <div className={styles.uiscalenderParent}>
        <img className={styles.uiscalenderIcon} alt="" src="/uiscalender.svg" />
        <label className={styles.ivYear}>IV Year</label>
      </div>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
        <address className={styles.sourabhPurbiaParent}>
          <label className={styles.webDevelopment}>Sourabh Purbia</label>
          <label className={styles.achievements1}>100 Achievements</label>
        </address>
        <img className={styles.icon} alt="" src="/1-1@2x.png" />
      </div>
      <div className={styles.maskGroupGroup}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
        <address className={styles.sourabhPurbiaParent}>
          <label className={styles.webDevelopment}>Sourabh Purbia</label>
          <label className={styles.achievements1}>80 Achievements</label>
        </address>
        <img className={styles.icon1} alt="" src="/2-24@2x.png" />
      </div>
      <div className={styles.maskGroupContainer}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
        <address className={styles.sourabhPurbiaParent}>
          <label className={styles.webDevelopment}>Sourabh Purbia</label>
          <label className={styles.coursesAvailable}>50 Achievements</label>
        </address>
        <img className={styles.icon1} alt="" src="/3-51@2x.png" />
      </div>
      <div className={styles.maskGroupParent1}>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
        <b className={styles.b}>4</b>
        <address className={styles.sourabhPurbiaParent}>
          <label className={styles.webDevelopment}>Sourabh Purbia</label>
          <label className={styles.coursesAvailable}>30 Achievements</label>
        </address>
      </div>
      <div className={styles.rectangleGroup}>
        <article className={styles.rectangleArticle} />
        <img
          className={styles.maskGroupIcon5}
          alt=""
          src="/mask-group@2x.png"
        />
        <b className={styles.b1}>35</b>
        <div className={styles.sourabhPurbiaParent1}>
          <b className={styles.sourabhPurbia5}>Sourabh Purbia</b>
          <div className={styles.achievements5}>3 Achievements</div>
        </div>
      </div>
      <div className={styles.maskGroup}>
        <img
          className={styles.passportPic2}
          alt=""
          src="/passport-pic-2@2x.png"
        />
      </div>
      <article className={styles.rectangleContainer}>
        <section className={styles.groupChild1} />
        <div className={styles.groupParent1}>
          <article className={styles.groupWrapper}>
            <div className={styles.icroundAccessTimeFilledParent}>
              <img
                className={styles.icroundAccessTimeFilledIcon}
                alt=""
                src="/icroundaccesstimefilled.svg"
              />
              <div className={styles.posted1dayAgo}>Posted 1day ago</div>
            </div>
          </article>
          <address className={styles.maskGroup1}>
            <img
              className={styles.passportPic21}
              alt=""
              src="/passport-pic-21@2x.png"
            />
          </address>
          <div className={styles.sourabhPurbiaParent2}>
            <b className={styles.sourabhPurbia5}>Sourabh Purbia</b>
            <div className={styles.achievements5}>100 Achievements</div>
          </div>
          <Button
            className={styles.mdidotsHorizontal}
            sx={{ width: 36 }}
            variant="text"
            color="primary"
          />
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <Button
          className={styles.groupChild2}
          sx={{ width: 180 }}
          variant="contained"
          color="primary"
        >
          Ask for help
        </Button>
        <Button
          className={styles.groupChild3}
          sx={{ width: 183 }}
          variant="contained"
          color="primary"
          startIcon={<Icon>thumb_up_alt_sharp</Icon>}
        >
          Appreciate
        </Button>
        <label className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </label>
        <label className={styles.titleHere}>
          Title Here - Title of the Certificate (Character Limit - 56)
        </label>
        <Button
          className={styles.frameButton}
          sx={{ width: 102 }}
          variant="contained"
          color="primary"
        >
          Share
        </Button>
        <address className={styles.univerityOfArtsCaliforniaParent}>
          <label className={styles.univerityOfArts}>
            Univerity of Arts, California
          </label>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdibookeducation.svg"
          />
        </address>
        <div className={styles.phcertificateFillParent}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/phcertificatefill.svg"
          />
          <label className={styles.ca201935685sp}>CA/2019/35685SP</label>
        </div>
        <a className={styles.mdilinkBoxVariantOutlineParent}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdilinkboxvariantoutline.svg"
          />
          <div className={styles.certificateLink}>Certificate Link</div>
        </a>
      </article>
      <div className={styles.rectangleParent1}>
        <section className={styles.groupChild1} />
        <div className={styles.groupParent2}>
          <div className={styles.groupFrame}>
            <div className={styles.icroundAccessTimeFilledParent}>
              <img
                className={styles.icroundAccessTimeFilledIcon}
                alt=""
                src="/icroundaccesstimefilled1.svg"
              />
              <div className={styles.posted1dayAgo}>Posted 1day ago</div>
            </div>
          </div>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.sourabhPurbiaParent3}>
            <label className={styles.webDevelopment}>Sourabh Purbia</label>
            <label className={styles.achievements1}>100 Achievements</label>
          </address>
          <img
            className={styles.mdidotsHorizontalIcon}
            alt=""
            src="/mdidotshorizontal.svg"
          />
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <Button
          className={styles.groupChild2}
          sx={{ width: 180 }}
          variant="contained"
          color="primary"
        >
          Login as a Teacher
        </Button>
        <Button
          className={styles.groupChild3}
          sx={{ width: 183 }}
          variant="contained"
          color="primary"
          startIcon={<Icon>thumb_up_alt_sharp</Icon>}
        >
          Appreciate
        </Button>
        <label className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </label>
        <label className={styles.titleHere}>
          Title Here - Title of the Certificate (Character Limit - 56)
        </label>
        <Button
          className={styles.frameButton}
          sx={{ width: 102 }}
          variant="contained"
          color="primary"
        >
          Share
        </Button>
        <address className={styles.univerityOfArtsCaliforniaParent}>
          <label className={styles.univerityOfArts}>
            Univerity of Arts, California
          </label>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdibookeducation1.svg"
          />
        </address>
        <div className={styles.phcertificateFillParent}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/phcertificatefill.svg"
          />
          <label className={styles.ca201935685sp}>CA/2019/35685SP</label>
        </div>
        <div className={styles.mdilinkBoxVariantOutlineGroup}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdilinkboxvariantoutline.svg"
          />
          <div className={styles.certificateLink}>Certificate Link</div>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <section className={styles.groupChild1} />
        <div className={styles.groupParent3}>
          <article className={styles.groupWrapper}>
            <div className={styles.icroundAccessTimeFilledParent}>
              <img
                className={styles.icroundAccessTimeFilledIcon}
                alt=""
                src="/icroundaccesstimefilled2.svg"
              />
              <div className={styles.posted1dayAgo}>Posted 1day ago</div>
            </div>
          </article>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.sourabhPurbiaParent3}>
            <label className={styles.webDevelopment}>Sourabh Purbia</label>
            <label className={styles.achievements1}>100 Achievements</label>
          </address>
          <img
            className={styles.mdidotsHorizontalIcon}
            alt=""
            src="/mdidotshorizontal.svg"
          />
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <Button
          className={styles.groupChild2}
          sx={{ width: 180 }}
          variant="contained"
          color="primary"
        >
          Login as a Teacher
        </Button>
        <Button
          className={styles.groupChild3}
          sx={{ width: 183 }}
          variant="contained"
          color="primary"
          startIcon={<Icon>thumb_up_alt_sharp</Icon>}
        >
          Appreciate
        </Button>
        <label className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </label>
        <label className={styles.titleHere}>
          Title Here - Title of the Certificate (Character Limit - 56)
        </label>
        <Button
          className={styles.frameButton}
          sx={{ width: 102 }}
          variant="contained"
          color="primary"
        >
          Share
        </Button>
        <address className={styles.univerityOfArtsCaliforniaParent}>
          <label className={styles.univerityOfArts}>
            Univerity of Arts, California
          </label>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdibookeducation2.svg"
          />
        </address>
        <div className={styles.phcertificateFillParent}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/phcertificatefill.svg"
          />
          <label className={styles.ca201935685sp}>CA/2019/35685SP</label>
        </div>
        <div className={styles.mdilinkBoxVariantOutlineContainer}>
          <img
            className={styles.mdibookEducationIcon}
            alt=""
            src="/mdilinkboxvariantoutline.svg"
          />
          <div className={styles.certificateLink}>Certificate Link</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <article className={styles.rectangleParent3}>
          <div className={styles.rectangleDiv} />
          <article className={styles.groupParent4}>
            <Button
              className={styles.groupChild14}
              sx={{ width: 148.86666870117188 }}
              variant="contained"
              color="primary"
              size="large"
            >
              Join as a Student
            </Button>
            <Button
              className={styles.groupChild15}
              sx={{ width: 273 }}
              variant="contained"
              color="primary"
              size="large"
            >
              Join as a Student
            </Button>
            <article
              className={styles.showcaseYourFirstAchivementWrapper}
              data-animate-on-scroll
            >
              <strong className={styles.showcaseYourFirstContainer}>
                <p className={styles.referYourFriend}>
                  <span
                    className={styles.showcaseYour}
                  >{`Showcase your `}</span>
                  <span>First</span>
                </p>
                <p className={styles.referYourFriend}>Achivement</p>
              </strong>
            </article>
          </article>
          <img
            className={styles.maskGroupIcon8}
            alt=""
            src="/mask-group1.svg"
          />
        </article>
      </div>
      <div className={styles.groupParent5}>
        <div className={styles.maskGroupParent2}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.webDevelopmentParent}>
            <label className={styles.webDevelopment}>Web Development</label>
            <label className={styles.coursesAvailable}>
              15 Courses Available
            </label>
          </address>
        </div>
        <img
          className={styles.materialSymbolsexpandMoreIcon}
          alt=""
          src="/materialsymbolsexpandmore.svg"
        />
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.maskGroupParent2}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.webDevelopmentParent}>
            <label className={styles.webDevelopment}>Web Development</label>
            <label className={styles.coursesAvailable}>
              15 Courses Available
            </label>
          </address>
        </div>
        <img
          className={styles.materialSymbolsexpandMoreIcon}
          alt=""
          src="/materialsymbolsexpandmore.svg"
        />
      </div>
      <div className={styles.groupParent7}>
        <div className={styles.maskGroupParent2}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.webDevelopmentParent}>
            <label className={styles.webDevelopment}>Web Development</label>
            <label className={styles.coursesAvailable}>
              15 Courses Available
            </label>
          </address>
        </div>
        <img
          className={styles.materialSymbolsexpandMoreIcon}
          alt=""
          src="/materialsymbolsexpandmore.svg"
        />
      </div>
      <div className={styles.groupParent8}>
        <div className={styles.maskGroupParent2}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.webDevelopmentParent}>
            <label className={styles.webDevelopment}>Web Development</label>
            <label className={styles.coursesAvailable}>
              15 Courses Available
            </label>
          </address>
        </div>
        <img
          className={styles.materialSymbolsexpandMoreIcon}
          alt=""
          src="/materialsymbolsexpandmore.svg"
        />
      </div>
      <div className={styles.groupParent9}>
        <div className={styles.maskGroupParent2}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group@2x.png"
          />
          <address className={styles.webDevelopmentParent}>
            <label className={styles.webDevelopment}>Web Development</label>
            <label className={styles.coursesAvailable}>
              15 Courses Available
            </label>
          </address>
        </div>
        <img
          className={styles.materialSymbolsexpandMoreIcon}
          alt=""
          src="/materialsymbolsexpandmore.svg"
        />
      </div>
      <img className={styles.lineIcon} alt="" src="/line-9@2x.png" />
      <img
        className={styles.homePageNewUserChild5}
        alt=""
        src="/line-9@2x.png"
      />
      <img
        className={styles.homePageNewUserChild6}
        alt=""
        src="/line-9@2x.png"
      />
      <img
        className={styles.homePageNewUserChild7}
        alt=""
        src="/line-9@2x.png"
      />
    </main>
  );
};

export default LandingPage;
