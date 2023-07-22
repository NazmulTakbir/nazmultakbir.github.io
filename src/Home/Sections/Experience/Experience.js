import React from "react";
import Link from "@mui/material/Link";

import { ReactComponent as DotNetCore } from "../../../Files/svg/NET_Core.svg";
import { ReactComponent as CSharp } from "../../../Files/svg/C#.svg";
import { ReactComponent as FSharp } from "../../../Files/svg/F#.svg";
import { ReactComponent as SQLServer } from "../../../Files/svg/SQL_Server.svg";

function Experience() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  Software Engineer Level 2 at{" "}
                  <Link target="_blank" rel="noopener noreferrer" href="https://chaldal.tech/">
                    {" "}
                    Chaldal
                  </Link>
                </h3>
                <DotNetCore style={{ paddingLeft: "0", marginRight: "4", width: "30px", height: "30px" }} />
                <CSharp style={{ paddingLeft: "4", marginRight: "8", width: "30px", height: "30px" }} />
                <FSharp style={{ paddingLeft: "0", marginRight: "4", width: "35px", height: "35px" }} />
                <SQLServer style={{ paddingLeft: "0", marginRight: "0", width: "35px", height: "35px" }} />
                <br />
                <br />
                <p>
                  At{" "}
                  <Link target="_blank" rel="noopener noreferrer" href="https://chaldal.com/">
                    Chaldal
                  </Link>
                  , Bangladesh's leading online grocery service, I work as a Software Engineer within the Supply Chain
                  Operations team. Our primary focus is the development and maintenance of software solutions that
                  facilitate product demand forecasting, vendor sourcing, warehouse inventory distribution, shelf
                  inventory management, and order fulfillment operations. My responsibilities can be broadly divided
                  into two primary areas:
                  <ul style={{ marginTop: "10px" }}>
                    <li>
                      Working with product managers to understand their needs and building new software solutions to
                      meet them.
                    </li>
                    <li>
                      Refactoring the existing codebase to enhance code quality or to optimize the execution time of API
                      requests and database queries.
                    </li>
                  </ul>
                  I primarily specialize in the backend of the technology stack, utilizing C# predominantly and F# to a
                  lesser extent, all within the .NET ecosystem. Additionally, I regularly work with SQL Server DBMS, and
                  use the Telerik suite with the Razor Engine for frontend development tasks.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2023 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </React.Fragment>
  );
}

export default Experience;
