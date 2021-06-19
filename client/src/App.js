import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./page/homePage/home";
import { useRoutes } from "./routes";

// <Customers />
const App = (props) => {
  return (
    <Router>
      <div className="App">{useRoutes(props)}</div>
    </Router>
  );
};

export default App;
