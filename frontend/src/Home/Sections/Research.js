import React from "react";
import Link from "@mui/material/Link";

function Research() {
  return (
    <React.Fragment>
      <section class="resume-section" id="research">
        <div class="resume-section-content">
          <h2 class="mb-5">Research</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Online Machine Learning using Serverless Architecture</h3>
                Supervised by{" "}
                <Link target="_blank" rel="noopener noreferrer" href="https://sites.google.com/site/abdullahadnan/">
                  {" "}
                  Dr. Muhammad Abdullah Adnan
                </Link>
                <br />
                Collaborator{" "}
                <Link target="_blank" rel="noopener noreferrer" href="https://tahmeed.xyz/">
                  {" "}
                  Tahmeed Tarek
                </Link>
                <br />
                <br />
                <p>
                  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                  going forward, a new normal that has evolved from generation X is on the runway heading towards a
                  streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2022 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </React.Fragment>
  );
}

export default Research;
