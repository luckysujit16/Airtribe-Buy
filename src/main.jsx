import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./pages/Header";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import App from "./App.jsx";
import Header from "./pages/Header";
import Footer from "./pages/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>
);
