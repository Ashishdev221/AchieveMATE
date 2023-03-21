import styles from "./QuickShareContainer.module.css";

const QuickShareContainer = () => {
  return (
    <article className={styles.frameWrapper}>
      <article className={styles.quickShareParent}>
        <strong className={styles.quickShare}>Quick Share</strong>
        <strong className={styles.quicklyShareYourContainer}>
          <p className={styles.quicklyShareYour}>Quickly share your</p>
          <p className={styles.quicklyShareYour}>achievements with your</p>
          <p className={styles.quicklyShareYour}>peers and employers.</p>
        </strong>
      </article>
    </article>
  );
};

export default QuickShareContainer;
