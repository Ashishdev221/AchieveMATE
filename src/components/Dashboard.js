import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Dashboard.css";
import Table from "./Table";
import Setting from "./Setting";
import TeacherTable from "./TeacherTable";
import PendingRequest from "./PendingRequest";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboard">
      <Box sx={{ width: "100%" }}>
        <div class="d-flex p-2">
          <div className=" p-2">
            <img src="/backBtn.svg" width={"20px"} height={"20px"} />
          </div>
          <h3 className="mx-4">My Dashboard</h3>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Pending Requests" {...a11yProps(0)} />
            <Tab label="Analytics" {...a11yProps(1)} />
            <Tab label="Settings" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <PendingRequest/>
          {/* Item One */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TeacherTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Setting />
        </TabPanel>
      </Box>
    </div>
  );
}
