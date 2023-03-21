import styles from "./ContainerWrapper.module.css";

const ContainerWrapper = () => {
  return (
    <section className={styles.rectangleParent}>
      <article className={styles.groupChild} />
      <article className={styles.groupItem} />
      <strong className={styles.courses}>
        <p className={styles.p}>350</p>
        <p className={styles.courses1}>Courses</p>
      </strong>
      <article className={styles.groupInner} />
      <b className={styles.achievements}>
        <p className={styles.p}>5,000</p>
        <p className={styles.courses1}>Achievements</p>
      </b>
      <article className={styles.fluentlearningApp24Filled}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </article>
      <article className={styles.mdiachievementVariant}>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </article>
      <article className={styles.mdiaccountStudent}>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      </article>
      <strong className={styles.achievers}>
        <p className={styles.p}>3,000</p>
        <p className={styles.courses1}>Achievers</p>
      </strong>
    </section>
  );
};

export default ContainerWrapper;
