import React, { Component, useState, useEffect } from "react";
import "./announcement.css";
import Step1 from "./step1";
import Step2 from "./step_2";
import Step3 from "./step3";
import { useParams, useHistory } from "react-router-dom";

const Announcement = (props) => {
  const { id } = useParams();
  let page = <Step1 state={props.state} />;
  let history = useHistory();
  // if (id != "step1" && id != "step2") {
  //   history.push("/home");
  // }

  const [state, setState] = useState(props.state);
  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
  }, [props.state.filtClassName]);

  switch (id) {
    case "step1":
      page = <Step1 state={props.state} />;
      break;
    case "step2":
      page = <Step2 state={props.state} />;
      break;
    case "step3":
      page = <Step3 state={props.state.formData} />;
      break;
  }
  return <div>{page}</div>;
};

export default Announcement;
