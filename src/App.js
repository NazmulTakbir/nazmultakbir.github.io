import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const p = urlParams.get("p");
    console.log(p);

    if (p === "/i") {
      console.log("Visiting From Instagram");
    } else if (p === "/f") {
      console.log("Visiting From Facebook");
    } else if (p === "/l") {
      console.log("Visiting From LinkedIn");
    } else if (p === "/g") {
      console.log("Visiting From Github");
    } else if (p === "/k") {
      console.log("Visiting From Kaggle");
    } else if (p === "/t") {
      console.log("Visiting From Twitter");
    } else if (p === "/y") {
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
