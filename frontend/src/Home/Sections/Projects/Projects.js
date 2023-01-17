import React from "react";

import useWindowSize from "../../../Hooks/useWindowSize";

import LargeScreen from "./LargeScreen";
import MediumScreen from "./MediumScreen";
import MobileScreen from "./MobileScreen";

function Projects() {
  const projects = [
    {
      name: "BIIS++",
      imgName: "biis.jpeg",
      tech: { js: true, react: true, node: true, pgsql: true },
      gitlink: "https://github.com/NazmulTakbir/BIIS_PlusPlus",
      videolink: "https://youtu.be/-7aKLwsmwoU",
    },
    {
      name: "Bus-Radar",
      imgName: "bus-radar.jpeg",
      tech: { java: true, android: true },
      gitlink: "https://github.com/NazmulTakbir/BusRadarServer",
      videolink: "https://youtu.be/LHw_gOE1kJA",
    },
    {
      name: "Zarad",
      imgName: "zarad.jpeg",
      tech: { python: true, django: true, bootstrap: true },
      gitlink: "https://github.com/NazmulTakbir/E-Commerce-Website-Project",
      videolink: "https://youtu.be/O7sfdfkzFvY",
    },
    {
      name: "LAN-Messenger",
      imgName: "lan-messenger.jpeg",
      tech: { java: true, javafx: true },
      gitlink: "https://github.com/NazmulTakbir/LAN-Messenger",
      videolink: "#",
    },
    {
      name: "Smart-Stick",
      imgName: "smart-stick.jpg",
      tech: { cpp: true, java: true, android: true },
      gitlink: "https://github.com/NazmulTakbir/CSE-316-Project-",
      videolink: "https://youtu.be/c8J_XOOHVkg",
    },
    {
      name: "RayTracing",
      imgName: "ray-tracing.jpeg",
      tech: { cpp: true, opengl: true },
      gitlink: "#",
      videolink: "https://youtu.be/WdD2raMlHNU",
    },
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
