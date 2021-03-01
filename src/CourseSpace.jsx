import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/styles.scss";
import "antd/dist/antd.css";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

const CourseSpace = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default CourseSpace;
