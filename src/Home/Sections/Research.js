import React from "react";
import Link from "@mui/material/Link";

function Research() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="research">
        <div class="resume-section-content">
          <h2 class="mb-5">Research</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
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
                  Online Machine Learning models have the ability to continuously learn from a stream of data, making
                  them particularly useful in real-time scenarios such as sensor data or{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Click-through_rate"
                  >
                    click-through-rates
                  </Link>{" "}
                  of a recommender system. Despite its potential, this approach is not widely utilized due to{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://huyenchip.com/2020/12/27/real-time-machine-learning.html"
                  >
                    limitations
                  </Link>{" "}
                  in model development and deployment infrastructure. In this project, we focus on the latter by
                  proposing a serverless architecture for online machine learning. The properties of serverless
                  architecture such as scalability, cost-efficiency, and ease of deployment make it a promising solution
                  for online machine learning. We will test the validity of this promise by comparing the deployment of
                  online machine learning models on a serverless architecture with traditional methods in terms of cost,
                  latency, scalability, and ease of deployment
                </p>
                <p>
                  Experiments for the project are performed on the AWS cloud. The project is funded by RISE, BUET
                  Student Research Grant{" "}
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
