import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300 }} className="jumbotron">
  <h1>Welcome to Creative Space</h1>
    {children}
  </div>;

export default Jumbotron;
