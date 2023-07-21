import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    const url = window.location.href;

    if (url.includes("github.io")) {
      const partAfterGithub = url.slice(url.indexOf("github.io") + "github.io".length);

      if (partAfterGithub.includes("f")) {
        console.log("Visiting From Facebook");
      } else if (partAfterGithub.includes("g")) {
        console.log("Visiting From GitHub");
      } else if (partAfterGithub.includes("l")) {
        console.log("Visiting From LinkedIn");
      } else if (partAfterGithub.includes("y")) {
        console.log("Visiting From YouTube");
      } else {
        console.log("Visiting From Instagram/Direct");
      }
    } else {
      console.log("Visiting From Localhost");
    }
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>Nazmul Takbir</title>
        <link rel="canonical" href="https://nazmultakbir.github.io/" />
        <meta name="description" content="Nazmul Takbir Portfolio" />
      </Helmet>
      <HomePage />
    </React.Fragment>
  );
}

export default App;
