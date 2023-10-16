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
            I am a Computer Science graduate from BUET and am currently working as a Software Engineer at Chaldal,
            Bangladesh's largest online grocery service. At Chaldal, I build{" "}
            <strong>software that streamlines supply chain operations</strong>, including demand forecasting and
            inventory management. <br />
            <br />
            Simultaneously, I am also interested in academic research. My undergraduate thesis was on{" "}
            <strong>leveraging serverless computing for training online machine learning models</strong>: an
            intersection between the fields of computer systems and machine learning. My work is currently under review
            at a conference. <br />
            <br />
            Having some experience in both academic research and the industry has made me realize that my passion lies
            at their intersection:{" "}
            <strong>using computer science research to address complex real-world problems</strong>. I aspire to a
            future role that embodies this perfect synergy.
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
          <Link
            href={require("../../../Files/pdf/NazmulTakbirCV.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button style={{ backgroundColor: "#495057", marginTop: "30px" }} variant="contained">
              Download CV<DownloadIcon></DownloadIcon>
            </Button>
          </Link>
          <p class="mb-3" style={{ marginTop: "15px", fontStyle: "italic" }}>
            Note: Website last updated on October 14, 2023. Please visit my{" "}
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
