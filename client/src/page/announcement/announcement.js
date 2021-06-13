import React, { Component, useState, useEffect } from "react";
import Search from "../homePage/search/search";
import "./announcement.css";
import Step1 from "./step1";
import Step2 from "./step2";

const Announcement = (props) => {
  const [state, setState] = useState(props.state);
  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    7;
  }, [props.state.filtClassName]);
  return (
    <div>
      <Step1 />
      <Step2 />
    </div>
  );
};

export default Announcement;
