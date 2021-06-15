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
      <img
      style={{ backgroundColor: "black", opacity: "0.07",zIndex: "-10",  }}
      className="App-header"
      src="https://previews.123rf.com/images/bentchang/bentchang1803/bentchang180301864/97380440-administrator-it-information-technology-conceptual-word-cloud-for-for-design-wallpaper-texture-or-ba.jpg"
      ></img>
    </Router>
  );
};

export default App;
