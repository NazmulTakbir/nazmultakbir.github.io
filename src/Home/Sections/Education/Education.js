import React from "react";

import Link from "@mui/material/Link";
import "./style.css";

function Education() {
  return (
    <React.Fragment>
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-3">Education</h2>
          <div class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Bangladesh University of Engineering and Technology</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science and Engineering</div>
              <p>Current CGPA: 3.91</p>
              <p>Expected Graduation Date: May 2023</p>
              <p>
                <Link href="#">Here's some of the courses I enjoyed most</Link>
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">April 2018 - May 2023</span>
            </div>
          </div>
          <div class="institution-card d-flex flex-column flex-md-row justify-content-between shadow p-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Mastermind English Medium School</h3>
              <div class="subheading mb-3">O levels and A levels</div>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">August 2006 - June 2017</span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Education;
