import React from "react";
import errorImg from "../assets/E404.gif";

const E404 = () => {
  return (
    <div className="contianer-fluid d-block p-5 h-50">
      <h2>Error Page</h2>
      <img src={errorImg} alt="Page Not Found Error Page"></img>
    </div>
  );
};

export default E404;
