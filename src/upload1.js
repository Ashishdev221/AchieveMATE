import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./upload1.module.css";

const Upload1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/upload-2");
  }, [navigate]);

  return (
    <div className={styles.upload1}>
      <Button
        className={styles.mdicloseBox}
        sx={{ width: 40 }}
        variant="contained"
        color="primary"
        size="small"
        onClick={onClose}
      >
        x
      </Button>
      <b className={styles.uploadYourAchievement}>Upload Your Achievement</b>
      <TextField
        className={styles.upload1Child}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Title of your Achievement"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.upload1Item}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Certifying Autority (eg - CTAE, Coursera etc)"
        size="medium"
        margin="none"
      />
      <div className={styles.groupParent}>
        <Button
          className={styles.groupChild}
          sx={{ width: 130 }}
          variant="contained"
          color="primary"
          onClick={onGroupButtonClick}
        >
          Next
        </Button>
        <Button
          className={styles.groupItem}
          sx={{ width: 130 }}
          variant="outlined"
          color="primary"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
      <TextField
        className={styles.upload1Inner}
        sx={{ width: 560 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Category of your Achievement"
        size="medium"
        margin="none"
      />
      <section className={styles.frameSection}>
        <section className={styles.materialSymbolscloudUploadParent}>
          <article className={styles.materialSymbolscloudUpload}>
            <img className={styles.vectorIcon} alt="" src="/vector13.svg" />
          </article>
          <div className={styles.dragAndDrop}>Drag and Drop here</div>
          <section className={styles.groupInner} />
          <div className={styles.orParent}>
            <div className={styles.or}>Or</div>
            <img className={styles.lineIcon} alt="" src="/line-13@2x.png" />
            <img className={styles.groupChild1} alt="" src="/line-13@2x.png" />
          </div>
          <input className={styles.groupInput} type="file" required autoFocus />
          <article className={styles.uploadGuidelinesParent}>
            <div className={styles.uploadGuidelines}>Upload Guidelines</div>
            <div className={styles.onlyPngJpgContainer}>
              <p className={styles.onlyPngJpg}>
                (Only Png, Jpg and Jpeg file format allowed and
              </p>
              <p className={styles.onlyPngJpg}>
                Maximum file size allowed is 5MB)
              </p>
            </div>
          </article>
        </section>
      </section>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
      </div>
    </div>
  );
};

export default Upload1;
