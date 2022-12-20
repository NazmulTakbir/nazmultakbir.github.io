import React from "react";

function Home() {
  return (
    <React.Fragment>
      <section class="resume-section" id="home">
        <div class="resume-section-content">
          <h1 class="mb-0">
            <span class="text-primary">Nazmul</span> <span style={{ color: "#bc4b49" }}>Takbir</span>
          </h1>
          <div class="subheading mb-5">
            3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p class="lead mb-5">
            I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div class="social-icons">
            <a class="social-icon" href="#!">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-github"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="social-icon" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
