import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import App from "./App";
import "./index.css";

const elem: HTMLElement | any = document.getElementById("root");

const root = ReactDOM.createRoot(elem);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
