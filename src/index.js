import React from "react";
import ReactDOM from "react-dom";
import CourseSpace from "./CourseSpace";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <CourseSpace />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
