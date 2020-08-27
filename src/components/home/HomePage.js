import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron" >
    <h1>Pluralsight admin</h1>
    <p>React, redux...</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div >
);

export default HomePage;
