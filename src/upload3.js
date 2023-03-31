import { Button, TextField } from "@mui/material";
import styles from "./upload3.module.css";

const Upload3 = ({ onClose }) => {
  return (
    <div className={styles.upload3}>
      <Button
        className={styles.mdicloseBox}
        sx={{ width: 40 }}
        variant="contained"
        color="primary"
        onClick={onClose}
      >
        x
      </Button>
      <b className={styles.preview}>Preview</b>
      <div className={styles.rectangleParent}>
        <aside className={styles.groupChild} />
        <aside className={styles.groupItem} />
        <aside className={styles.groupInner} />
      </div>
      <TextField
        className={styles.upload3Child}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="THOMSO22/ADDESIGN/1245"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.upload3Item}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="www.thomso.com/verify/ct/1245"
        size="medium"
        margin="none"
      />
      <section className={styles.groupParent}>
        <Button
          className={styles.groupButton}
          sx={{ width: 130 }}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
        <Button
          className={styles.groupChild1}
          sx={{ width: 130 }}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
      </section>
      <TextField
        className={styles.upload3Inner}
        sx={{ width: 559 }}
        color="primary"
        variant="outlined"
        type="text"
        label={`Winner of Ad Design Competition at IIT Roorkee with
the team Divyan, sourabh and divyansh.`}
        size="medium"
        margin="none"
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-47@2x.png" />
      <TextField
        className={styles.groupTextfield}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Certificate of Ad Design Winner at IITR"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.upload3Child1}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="IIT Roorkee"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.upload3Child2}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Hackathon"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default Upload3;
