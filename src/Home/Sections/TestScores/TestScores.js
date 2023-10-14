import React from "react";

function TestScores() {
  return (
    <React.Fragment>
      <section class="resume-section" id="testscores">
        <div class="resume-section-content">
          <h2 class="mb-5">Test Scores</h2>
          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li">
                <i class="fas fa-bookmark text-success"></i>
              </span>
              <strong>GRE</strong> 334 (Q: 169, V:165, AWA: 4)
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-bookmark text-success"></i>
              </span>
              <strong>TOEFL</strong> 115 (R: 30, L:30, S:26, W: 29)
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}

export default TestScores;
