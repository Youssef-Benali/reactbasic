import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
// import ComponentState from "./components/common/componentState";
import Ecole from "./components/common/ecole";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ComponentState/> */}
    <Ecole/>
  </React.StrictMode>
);
