import React from "react";
import ProjectCard from "./ProjectCard";

function MediumScreen(props) {
  return (
    <React.Fragment>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row">
              <div class="col-6">
                <ProjectCard project={props.projects[0]} width="18rem" />
              </div>
              <div class="col-6">
                <ProjectCard project={props.projects[1]} width="18rem" />
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <div class="row">
              <div class="col-6">
                <ProjectCard project={props.projects[2]} width="18rem" />
              </div>
              <div class="col-6">
                <ProjectCard project={props.projects[3]} width="18rem" />
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <div class="row">
              <div class="col-6">
                <ProjectCard project={props.projects[4]} width="18rem" />
              </div>
              <div class="col-6">
                <ProjectCard project={props.projects[5]} width="18rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <a
          style={{ marginTop: "20px", marginRight: "5px" }}
          class="btn btn-secondary"
          role="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i class="fa fa-arrow-left"></i>
        </a>
        <a
          style={{ marginTop: "20px", marginLeft: "5px" }}
          class="btn btn-secondary"
          role="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i class="fa fa-arrow-right"></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default MediumScreen;
