import React from "react";
import Link from "@mui/material/Link";

function Home() {
  return (
    <React.Fragment>
      <section class="resume-section" id="home">
        <div class="resume-section-content">
          <h1 class="mb-0">
            <span class="text-primary">Nazmul</span> <span style={{ color: "#bc4b49" }}>Takbir</span>
          </h1>
          <Link target="_blank" rel="noopener noreferrer" href="mailto:name@email.com">
            takbir.nazmul@gmail.com
          </Link>
          <br />
          <br />
          <p class="lead mb-5">
            I am a final year student of Computer Science and Engineering at Bangladesh University of Engineering and
            Technology (BUET). I am highly interested in the field of applied machine learning and computer systems.
            Currently, I am dedicating my time and efforts to my final year project, which seamlessly blends my two
            areas of interest - evaluating the feasibility of utilizing Serverless Architecture for Machine Learning
            applications.
          </p>
          <div class="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              href="https://www.linkedin.com/in/nazmul-takbir/"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" class="social-icon" href="https://github.com/NazmulTakbir">
              <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" class="social-icon" href="https://twitter.com/NazmulTakbir">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              href="https://www.facebook.com/nazmul.takbir/"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
