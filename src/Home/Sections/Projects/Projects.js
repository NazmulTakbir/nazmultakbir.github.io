import React from "react";

import useWindowSize from "../../../Hooks/useWindowSize";

import LargeScreen from "./LargeScreen";
import MediumScreen from "./MediumScreen";
import MobileScreen from "./MobileScreen";

function Projects() {
  const projects = [
    {
      name: "Digitization of Bangla Handwritten Text",
      imgName: "bangla-word.jpg",
      tech: { python: true, pytorch: true },
      gitlink: "https://github.com/NazmulTakbir/Digitization-of-Bangla-Handwritten-Text",
      videolink: "",
      description: "Using CRNNs with CTC‑Loss to perform Word‑Level Text Recognition  (4th year)",
    },
    {
      name: "Deep Learning using just NumPy",
      imgName: "cnn-offline.jpg",
      tech: { python: true },
      gitlink: "https://github.com/NazmulTakbir/DNN-and-CNN-Implementation-In-Numpy",
      videolink: "",
      description: "Implementing DNNs and CNNs from scratch, for example AlexNet (4th year)",
    },
    {
      name: "Operating Systems Project",
      imgName: "paging.jpg",
      tech: { cpp: true, bash: true },
      gitlink: "https://github.com/NazmulTakbir/XV6-Memory-Management-using-Paging",
      videolink: "",
      description: "Paging Framework for xv6 Operating System (3rd year)",
    },
    {
      name: "BIIS++",
      imgName: "biis.jpeg",
      tech: { js: true, react: true, node: true, pgsql: true },
      gitlink: "https://github.com/NazmulTakbir/BIIS_PlusPlus",
      videolink: "https://youtu.be/4mpUwZjIY_Y",
      description:
        "University Portal for Result Processing, Course Registration and Student Management for SWE course (4th year)",
    },
    {
      name: "Bus-Radar",
      imgName: "bus-radar.jpeg",
      tech: { java: true, android: true },
      gitlink: "https://github.com/ksaifahmed/BusRadar",
      videolink: "",
      description:
        "System Design and Partial Demo of a Bus Tracking Application developed for System Design course (3rd year)",
    },
    {
      name: "Zarad",
      imgName: "zarad.jpeg",
      tech: { python: true, django: true, bootstrap: true },
      gitlink: "https://github.com/NazmulTakbir/E-Commerce-Website-Project",
      videolink: "https://youtu.be/9_X6ZbJuMkg",
      description:
        "E-Commerce Website for buying and selling similar to Daraz developed for Database Systems course (2nd year)",
    },
    {
      name: "LAN-Messenger",
      imgName: "lan-messenger.jpeg",
      tech: { java: true, javafx: true },
      gitlink: "https://github.com/NazmulTakbir/LAN-Messenger",
      videolink: "",
      description:
        "Desktop Application for LAN based message exchange and file transfer developed for Java course (1st year)",
    },
    {
      name: "Smart-Stick",
      imgName: "smart-stick.jpg",
      tech: { cpp: true, java: true, android: true },
      gitlink: "https://github.com/NazmulTakbir/CSE-316-Project-",
      videolink: "https://youtu.be/c8J_XOOHVkg",
      description:
        "Microcontroller based Smart Stick for the Blind. My only experience of a hardware-based project. (3rd year)",
    },
    {
      name: "RayTracing",
      imgName: "ray-tracing.jpeg",
      tech: { cpp: true, opengl: true },
      gitlink: "https://github.com/NazmulTakbir/RayTracing",
      videolink: "https://youtu.be/WdD2raMlHNU",
      description: "A math-heavy assignment of Computer Graphics course that I really enjoyed (4th year)",
    },
  ];

  const screenWidth = useWindowSize().width;

  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="projects">
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
