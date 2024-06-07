import React from "react";
import errorImg from "../assets/ErrorPage.gif";

const E404 = () => {
  return (
    <div className="contianer-fluid d-block p-5 mt-5">
      <h2>Error Page</h2>
      <img
        src={errorImg}
        className="w-100"
        alt="Page Not Found Error Page"
      ></img>
    </div>
  );
};

export default E404;
