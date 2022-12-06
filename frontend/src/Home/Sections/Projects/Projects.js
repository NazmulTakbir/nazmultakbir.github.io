import React from "react";

import useWindowSize from "../../../Hooks/useWindowSize";

import LargeScreen from "./LargeScreen";
import MediumScreen from "./MediumScreen";
import MobileScreen from "./MobileScreen";

function Projects() {
  const projects = [
    { name: "BIIS++" },
    { name: "Bus-Radar" },
    { name: "Zarad" },
    { name: "LAN-Messenger" },
    { name: "Smart-Stick" },
    { name: "RayTracing" },
  ];

  const screenWidth = useWindowSize().width;

  return (
    <React.Fragment>
      <section class="resume-section" id="projects">
        <div class="resume-section-content">
          <h2 class="mb-5">Projects </h2>
          <div class="container">
            {screenWidth > 1250 ? (
              <LargeScreen projects={projects} />
            ) : screenWidth > 768 ? (
              <MediumScreen projects={projects} />
            ) : (
              <MobileScreen projects={projects} />
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
