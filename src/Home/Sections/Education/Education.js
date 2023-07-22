import React from "react";

import "./style.css";

function Education() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="education">
        <div class="resume-section-content">
          <h2 class="mb-3">Education</h2>
          <div
            class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
            style={{ marginRight: "12px", marginLeft: "12px" }}
          >
            <div class="flex-grow-1">
              <h3 class="mb-0">Bangladesh University of Engineering and Technology</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science and Engineering</div>
              <p>
                CGPA: 3.92 <br />
                17th out of 129 students
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">April 2018 - May 2023</span>
            </div>
          </div>
          <div
            class="institution-card d-flex flex-column flex-md-row justify-content-between shadow p-5"
            style={{ marginRight: "12px", marginLeft: "12px" }}
          >
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
