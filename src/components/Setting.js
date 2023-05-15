import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyIcon from "@mui/icons-material/Key";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LogoutIcon from "@mui/icons-material/Logout";
// import Switch, { SwitchProps } from '@mui/material/Switch';
import Switch from "@mui/base/Switch";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import { Icon } from "@iconify/react";
import { Form, Input, Checkbox, Divider } from "antd";

// const Android12Switch = styled(Switch)(({ theme }) => ({
//   padding: 8,
//   '& .MuiSwitch-track': {
//     borderRadius: 22 / 2,
//     '&:before, &:after': {
//       content: '""',
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       width: 16,
//       height: 16,
//     },
//     '&:before': {
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
//         theme.palette.getContrastText(theme.palette.primary.main),
//       )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
//       left: 12,
//     },
//     '&:after': {
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
//         theme.palette.getContrastText(theme.palette.primary.main),
//       )}" d="M19,13H5V11H19V13Z" /></svg>')`,
//       right: 12,
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxShadow: 'none',
//     width: 16,
//     height: 16,
//     margin: 2,
//   },
// }));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: ``,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontWeight: 600, fontSize: `24px` }}>
            <KeyIcon /> Login & Security
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            <Input
              prefix={<Icon icon="mdi:password" color="2D2380" />}
              type="password"
              placeholder="Password"
            />
            <Button
              className={"button-style"}
              label={"change password"}
              style={{ marginLeft: "50%", marginTop: "30px" }}
            ></Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontWeight: 600, fontSize: `24px` }}>
            {" "}
            <NotificationsActiveIcon /> Notification
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="flex">
              <div className="d-flex justify-content-between">
                <h5>Post reaction and appreciations notifications</h5>
                <ToggleButton></ToggleButton>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Other’s post notification</h5>
                <ToggleButton></ToggleButton>
              </div>
              <div className="d-flex justify-content-between">
                <h5>My post status notification</h5>
                <ToggleButton></ToggleButton>
              </div>
              <div className="d-flex justify-content-between">
                <h5>Messages notification</h5>
                <ToggleButton></ToggleButton>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontWeight: 600, fontSize: `24px` }}>
            <HelpCenterIcon /> Help & Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="d-flex justify-content-between">
              <p>
                If you have any query, reach out to us on email{" "}
                <span style={{ fontWeight: "bold" }}>
                  (Achievematectae@gmail.com)
                </span>
              </p>
              <Button className="button-style" label="Email" />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ fontWeight: 600, fontSize: `24px`, color: "#EC0707", paddingLeft: '40px' }}>
        <LogoutIcon /> <a href="/">Logout</a>
      </Typography>
      {/* <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography
            sx={{ fontWeight: 600, fontSize: `24px`, color: "#EC0707" }}
          >
            <LogoutIcon /> Logout
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
