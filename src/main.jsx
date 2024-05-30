import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import "./pages/Header"
import App from "./App.jsx";
import Header from "./pages/Header";
import Footer from "./pages/Footer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header/>    
      <App />
      <Footer/>    
  </React.StrictMode>
);
