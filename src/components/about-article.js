import { useMemo } from "react";
import styles from "./about-article.module.css";

const AboutArticle = ({
  about,
  aboutUs,
  team,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const groupArticleStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const groupArticle1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <article className={styles.aboutParent} style={groupArticleStyle}>
      <strong className={styles.about}>{about}</strong>
      <article className={styles.aboutUsParent} style={groupArticle1Style}>
        <strong className={styles.aboutUs}>{aboutUs}</strong>
        <strong className={styles.team}>{team}</strong>
      </article>
    </article>
  );
};

export default AboutArticle;
