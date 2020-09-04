import React from "react";
import { Link } from "react-router-dom";
import Counter from "../common/Counter";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight admin</h1>
    <p>React, redux...</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
    <Counter />
  </div>
);

export default HomePage;
