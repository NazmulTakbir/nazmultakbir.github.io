import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    if (window.location.pathname === "/i") {
      console.log("Visiting From Instagram");
    } else if (window.location.pathname === "/f") {
      console.log("Visiting From Facebook");
    } else if (window.location.pathname === "/l") {
      console.log("Visiting From LinkedIn");
    } else if (window.location.pathname === "/g") {
      console.log("Visiting From Github");
    } else if (window.location.pathname === "/k") {
      console.log("Visiting From Kaggle");
    } else if (window.location.pathname === "/t") {
      console.log("Visiting From Twitter");
    } else if (window.location.pathname === "/y") {
      console.log("Visiting From Youtube");
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
