import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { ReactComponent as Python } from "../../../Files/svg/python.svg";
import { ReactComponent as CPP } from "../../../Files/svg/cpp.svg";
import { ReactComponent as JAVA } from "../../../Files/svg/java.svg";
import { ReactComponent as C } from "../../../Files/svg/C.svg";
import { ReactComponent as JS } from "../../../Files/svg/JS.svg";

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
        <Box sx={{ p: 3 }}>
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

function TabController() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Languages" {...a11yProps(0)} />
            <Tab label="Web Dev" {...a11yProps(1)} />
            <Tab label="Dev Ops" {...a11yProps(2)} />
            <Tab label="Cloud" {...a11yProps(3)} />
            <Tab label="Others" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div class="p-1 pb-3">
            <div class="d-flex flex-row">
              <Python style={{ paddingLeft: "4", paddingRight: "8", width: "35px", height: "35px" }} />
              <div class="subheading">Python</div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 progress shadow" style={{ marginTop: "2px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "90%", backgroundColor: "#0d6efd" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <div class="p-1 pb-3">
            <div class="d-flex flex-row">
              <CPP style={{ paddingLeft: "4", paddingRight: "12", width: "35px", height: "35px" }} />
              <div class="subheading">C++</div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 progress shadow" style={{ marginTop: "2px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#0d6efd" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
          </div>
          <div class="p-1 pb-3">
            <div class="d-flex flex-row">
              <JS style={{ paddingLeft: "4", paddingRight: "12", width: "35px", height: "35px" }} />
              <div class="subheading">Javascript</div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 progress shadow" style={{ marginTop: "2px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "85%", backgroundColor: "#0d6efd" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
          <div class="p-1 pb-3">
            <div class="d-flex flex-row">
              <JAVA style={{ paddingLeft: "4", paddingRight: "12", width: "35px", height: "35px" }} />
              <div class="subheading">JAVA</div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 progress shadow" style={{ marginTop: "2px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "80%", backgroundColor: "#0d6efd" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
          </div>
          <div class="p-1 pb-3">
            <div class="d-flex flex-row">
              <C style={{ paddingLeft: "4", paddingRight: "12", width: "35px", height: "35px" }} />
              <div class="subheading">C</div>
            </div>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-12 progress shadow" style={{ marginTop: "2px" }}>
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "75%", backgroundColor: "#0d6efd" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Box>
    </div>
  );
}

export default TabController;
