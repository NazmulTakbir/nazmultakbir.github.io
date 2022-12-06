import React from "react";

import Navbar from "./Sections/Navbar";
import Home from "./Sections/Home";
import Research from "./Sections/Research";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";
import Awards from "./Sections/Awards";

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
