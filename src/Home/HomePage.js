import React from "react";

import Navbar from "./Sections/Navbar/Navbar";
import Home from "./Sections/Home/Home";
import Research from "./Sections/Research/Research";
import Education from "./Sections/Education/Education";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import Awards from "./Sections/Awards/Awards";
import Experience from "./Sections/Experience/Experience";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container-fluid p-0">
        <Home />
        <hr class="m-0" />
        <Education />
        <hr class="m-0" />
        <Research />
        <hr class="m-0" />
        <Experience />
        <hr class="m-0" />
        <Projects />
        <hr class="m-0" />
        <Skills />
        <hr class="m-0" />
        <Awards />
        <hr class="m-0" />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
