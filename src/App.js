import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    const hash = window.location.hash; // this gets the part of the URL after the '#'
    if (hash === "#/i") {
      console.log("Visiting From Instagram");
    } else if (hash === "#/f") {
      console.log("Visiting From Facebook");
    } else if (hash === "#/l") {
      console.log("Visiting From LinkedIn");
    } else if (hash === "#/g") {
      console.log("Visiting From Github");
    } else if (hash === "#/k") {
      console.log("Visiting From Kaggle");
    } else if (hash === "#/t") {
      console.log("Visiting From Twitter");
    } else if (hash === "#/y") {
      console.log("Visiting From Youtube");
    }
  }, []);

  return (
    <HashRouter>
      <React.Fragment>
        <Helmet>
          <title>Nazmul Takbir</title>
          <link rel="canonical" href="https://nazmultakbir.github.io/" />
          <meta name="description" content="Nazmul Takbir Portfolio" />
        </Helmet>
        <HomePage />
      </React.Fragment>
    </HashRouter>
  );
}

export default App;
