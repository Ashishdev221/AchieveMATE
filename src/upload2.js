import { useState, useCallback } from "react";
import { Button, TextField } from "@mui/material";
import Upload3 from "./upload3";
import PortalPopup from "./portal-popup";
import styles from "./upload2.module.css";

const Upload2 = ({ onClose }) => {
  const [isUpload3PopupOpen, setUpload3PopupOpen] = useState(false);
  const [isUpload3Popup1Open, setUpload3Popup1Open] = useState(false);

  const openUpload3Popup = useCallback(() => {
    setUpload3PopupOpen(true);
  }, []);

  const closeUpload3Popup = useCallback(() => {
    setUpload3PopupOpen(false);
  }, []);

  const openUpload3Popup1 = useCallback(() => {
    setUpload3Popup1Open(true);
  }, []);

  const closeUpload3Popup1 = useCallback(() => {
    setUpload3Popup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.upload2}>
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
        <b className={styles.details}>Details</b>
        <div className={styles.rectangleParent}>
          <aside className={styles.groupChild} />
          <aside className={styles.groupItem} />
          <aside className={styles.groupInner} />
        </div>
        <TextField
          className={styles.upload2Child}
          sx={{ width: 560 }}
          color="primary"
          variant="outlined"
          type="number"
          label="Certificate Number"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.upload2Item}
          sx={{ width: 560 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Certificate Link"
          size="medium"
          margin="none"
          required
        />
        <section className={styles.groupParent}>
          <Button
            className={styles.groupButton}
            sx={{ width: 130 }}
            variant="contained"
            color="primary"
            onClick={openUpload3Popup}
          >
            Next
          </Button>
          <Button
            className={styles.groupChild1}
            sx={{ width: 130 }}
            variant="outlined"
            color="primary"
            onClick={openUpload3Popup1}
          >
            Skip
          </Button>
        </section>
        <TextField
          className={styles.upload2Inner}
          sx={{ width: 559 }}
          color="primary"
          variant="outlined"
          multiline
          label="Description of your Achievement (Max 150 words)"
          margin="normal"
          required
        />
      </div>
      {isUpload3PopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpload3Popup}
        >
          <Upload3 onClose={closeUpload3Popup} />
        </PortalPopup>
      )}
      {isUpload3Popup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpload3Popup1}
        >
          <Upload3 onClose={closeUpload3Popup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Upload2;
