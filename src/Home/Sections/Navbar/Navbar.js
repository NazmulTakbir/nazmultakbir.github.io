import React, { useState, useEffect, useRef } from "react";

import ProfilePic from "../../Components/ProfilePic";
import SocialMedia from "../../Components/SocialMedia";

import "./style.css";

function Navbar() {
  const [selectedSection, setSelectedSection] = useState("About");
  const navbarToggler = useRef(null);

  const handleScroll = () => {
    const position = window.scrollY;
    const offet = 20;

    const offset = -1 * document.getElementById("root").getBoundingClientRect().top - offet;
    const eduPos = document.getElementById("education").getBoundingClientRect().top + offset - offet;
    const experiencePos = document.getElementById("experience").getBoundingClientRect().top + offset - offet;
    const researchPos = document.getElementById("research").getBoundingClientRect().top + offset - offet;
    const projPos = document.getElementById("projects").getBoundingClientRect().top + offset - offet;
    const skillsPos = document.getElementById("skills").getBoundingClientRect().top + offset - offet;
    const awardsPos = document.getElementById("awards").getBoundingClientRect().top + offset - offet * 10;

    if (position < eduPos) {
      setSelectedSection("Home");
    } else if (position >= eduPos && position < experiencePos) {
      setSelectedSection("Education");
    } else if (position >= experiencePos && position < researchPos) {
      setSelectedSection("Experience");
    } else if (position >= researchPos && position < projPos) {
      setSelectedSection("Research");
    } else if (position >= projPos && position < skillsPos) {
      setSelectedSection("Projects");
    } else if (position >= skillsPos && position < awardsPos) {
      setSelectedSection("Skills");
    } else if (position >= awardsPos) {
      setSelectedSection("Awards");
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 992) {
      navbarToggler.current.click();
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // https://stackoverflow.com/questions/71249961/react-jsx-setting-a-dynamic-hover-color-pseudoclass-property
  const sections = [
    { name: "Home", link: "#home" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    { name: "Research", link: "#research" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Awards", link: "#awards" },
  ];
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Nazmul Takbir</span>
          <span class="d-none d-lg-block">
            <div class="container">
              <ProfilePic />
              <SocialMedia />
              <hr class="bg-light border-2 border-top border-light"></hr>
            </div>
          </span>
        </a>
        <button
          ref={navbarToggler}
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            {sections.map((section) => {
              if (section.name === selectedSection)
                return (
                  <li
                    class="nav-item"
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      paddingLeft: "5px",
                      backgroundColor: "white",
                    }}
                  >
                    <a
                      class="nav-link js-scroll-trigger"
                      href={section.link}
                      style={{ color: "rgb(33, 37, 41)" }}
                      onClick={handleLinkClick}
                    >
                      {section.name}
                    </a>
                  </li>
                );
              return (
                <li class="nav-item" style={{ marginLeft: "10px", marginRight: "10px", paddingLeft: "5px" }}>
                  <a class="nav-link js-scroll-trigger" href={section.link} onClick={handleLinkClick}>
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
