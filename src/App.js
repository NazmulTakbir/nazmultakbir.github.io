import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("f")) {
      console.log("Visiting From Facebook");
    } else if (hash.includes("g")) {
      console.log("Visiting From GitHub");
    } else if (hash.includes("l")) {
      console.log("Visiting From LinkedIn");
    } else if (hash.includes("y")) {
      console.log("Visiting From YouTube");
    } else {
      console.log("Visiting From Instagram/Direct");
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
