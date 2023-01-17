import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as Python } from "../../../Files/svg/python.svg";
import { ReactComponent as CPP } from "../../../Files/svg/cpp.svg";
import { ReactComponent as JAVA } from "../../../Files/svg/java.svg";
import { ReactComponent as C } from "../../../Files/svg/C.svg";
import { ReactComponent as JS } from "../../../Files/svg/JS.svg";
import { ReactComponent as PGSql } from "../../../Files/svg/postgresql.svg";
import { ReactComponent as MongoDB } from "../../../Files/svg/mongodb.svg";
import { ReactComponent as Django } from "../../../Files/svg/django.svg";
import { ReactComponent as K8 } from "../../../Files/svg/kubernetes.svg";
import { ReactComponent as Linux } from "../../../Files/svg/linux.svg";
import { ReactComponent as Bash } from "../../../Files/svg/bash.svg";
import { ReactComponent as Git } from "../../../Files/svg/git.svg";
import { ReactComponent as Pytorch } from "../../../Files/svg/pytorch.svg";
import { ReactComponent as Android } from "../../../Files/svg/android.svg";
import { ReactComponent as AWS } from "../../../Files/svg/aws.svg";

import useWindowSize from "../../../Hooks/useWindowSize";
import "./style.css";

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

  const screenWidth = useWindowSize().width;
  let boxWidth = "100%";
  if (screenWidth > 1250) {
    boxWidth = "75%";
  } else if (screenWidth > 768) {
    boxWidth = "90%";
  }

  return (
    <div class="container">
      <Box sx={{ width: boxWidth }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "#212529",
            boxShadow: 8,
            borderRadius: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{ style: { background: "white", textColor: "white" } }}
          >
            <Tab
              sx={[
                { color: "#d8d8d8", fontWeight: "600" },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
              ]}
              label="Languages"
              {...a11yProps(0)}
            />
            <Tab
              sx={[
                { color: "#d8d8d8", fontWeight: "600" },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
              ]}
              label="WebDev"
              {...a11yProps(1)}
            />
            <Tab
              sx={[
                { color: "#d8d8d8", fontWeight: "600" },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
              ]}
              label="Devops"
              {...a11yProps(2)}
            />
            <Tab
              sx={[
                { color: "#d8d8d8", fontWeight: "600" },
                () => ({
                  "&.Mui-selected": {
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }),
              ]}
              label="Others"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Python style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />
              <div class="subheading">Python</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "85%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <CPP style={{ paddingLeft: "4", marginRight: "8", width: "28px", height: "28px" }} />
              <div class="subheading">C++</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "70%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <JS style={{ paddingLeft: "4", marginRight: "8", width: "29px", height: "29px" }} />
              <div class="subheading">Javascript</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "75%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <JAVA style={{ paddingLeft: "0", marginRight: "2", width: "35px", height: "35px" }} />
              <div class="subheading">JAVA</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "65%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <C style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />
              <div class="subheading">C</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <FontAwesomeIcon
                style={{ paddingLeft: "4", paddingRight: "8", color: "#73B856", width: "35px", height: "35px" }}
                size="2x"
                icon="fa-brands fa-node"
              />
              <div class="subheading">NodeJS</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "75%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Django style={{ paddingLeft: "4", marginRight: "7", width: "37px", height: "37px" }} />
              <div class="subheading">Django</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "55%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <FontAwesomeIcon
                style={{ paddingLeft: "4", paddingRight: "8", color: "#00d8ff", width: "32px", height: "32px" }}
                size="2x"
                icon="fa-brands fa-react"
              />
              <div class="subheading">React</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "65%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <FontAwesomeIcon
                style={{ paddingLeft: "4", paddingRight: "8", color: "#7411EF", width: "30px", height: "30px" }}
                size="2x"
                icon="fa-brands fa-bootstrap"
              />
              <div class="subheading">Bootstrap</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <PGSql style={{ paddingLeft: "4", paddingRight: "8", width: "40px", height: "40px" }} />
              <div class="subheading">PostgreSQL</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "80%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <MongoDB style={{ paddingLeft: "2", marginRight: "5", width: "40px", height: "40px" }} />
              <div class="subheading">MongoDB</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <FontAwesomeIcon
                style={{ paddingLeft: "4", marginRight: "6", width: "30px", height: "30px", color: "#2393E6" }}
                icon="fa-brands fa-docker"
              />
              <div class="subheading">Docker</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <K8 style={{ paddingLeft: "4", marginRight: "4", width: "34px", height: "34px" }} />
              <div class="subheading">Kubernetes</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "30%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Linux style={{ paddingLeft: "4", marginRight: "4", width: "32px", height: "32px" }} />
              <div class="subheading">Linux</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "70%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Bash
                style={{
                  padding: "0",
                  margin: "0",
                  marginRight: "6",
                  width: "30px",
                  height: "30px",
                }}
              />
              <div class="subheading">Bash</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "45%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <AWS style={{ paddingLeft: "2", marginRight: "6", width: "33px", height: "33px" }} />
              <div class="subheading">AWS</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Git style={{ paddingLeft: "2", marginRight: "6", width: "33px", height: "33px" }} />
              <div class="subheading">Git</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "55%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Pytorch style={{ padding: "0", marginRight: "4", width: "27px", height: "27px" }} />
              <div class="subheading">Pytorch</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <Android style={{ paddingLeft: "1", marginRight: "4", width: "32px", height: "32px" }} />
              <div class="subheading">AndroidStudio</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "35%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <img
                src={require("../../../Files/imgs/javafx.jpg")}
                style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              ></img>
              <div class="subheading">JavaFX</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "30%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <img
                src={require("../../../Files/imgs/latex.png")}
                style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              ></img>
              <div class="subheading">Latex</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "45%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <img
                src={require("../../../Files/imgs/ns3.png")}
                style={{ height: "20px", marginTop: "10px", marginRight: "6px" }}
              ></img>
              <div class="subheading">NS3</div>
            </div>
            <div class=" progress shadow" style={{ marginTop: "2px" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "25%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
          <div class="skill-item p-1 pb-3">
            <div class="d-flex flex-row">
              <img
                src={require("../../../Files/imgs/opengl.png")}
                style={{ height: "25px", marginTop: "5px", marginRight: "6px" }}
              ></img>
              <div class="subheading">OpenGL</div>
            </div>
            <div class="progress shadow" style={{ marginTop: "2px", backgroundColor: "#E9ECEF" }}>
              <div class="progress-bar" role="progressbar" style={{ width: "20%", backgroundColor: "#3296fd" }}></div>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}

export default TabController;
