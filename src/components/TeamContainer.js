import { useMemo } from "react";
import styles from "./TeamContainer.module.css";

const TeamContainer = ({
  teamMembers,
  teamMemberNames,
  propLeft,
  propLeft1,
}) => {
  const groupAddressStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const sourabhPurbiaStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <address className={styles.rectangleParent} style={groupAddressStyle}>
      <article className={styles.groupChild} />
      <article className={styles.groupItem} />
      <strong className={styles.sourabhPurbia} style={sourabhPurbiaStyle}>
        <p className={styles.sourabh}>{teamMembers}</p>
        <p className={styles.sourabh}>{teamMemberNames}</p>
      </strong>
    </address>
  );
};

export default TeamContainer;
