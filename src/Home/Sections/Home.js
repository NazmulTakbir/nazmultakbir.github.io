import React from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

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
          <Link href={require("../../Files/pdf/NazmulTakbirCV.pdf")} target="_blank" rel="noopener noreferrer" download>
            <Button style={{ backgroundColor: "#495057", marginTop: "40px" }} variant="contained">
              Resume<DownloadIcon></DownloadIcon>
            </Button>
          </Link>
          <p class="mb-3" style={{ marginTop: "20px", fontStyle: "italic" }}>
            Note: Website last updated on May 1, 2023. Please visit my{" "}
            <a href="https://www.linkedin.com/in/nazmul-takbir/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>{" "}
            for the latest updates.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
