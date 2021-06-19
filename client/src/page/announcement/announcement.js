import React, { Component, useState, useEffect } from "react";
import "./announcement.css";
import Step1 from "./step1";
import Step_2 from "./step_2";
import { useParams, useHistory } from "react-router-dom";

const Announcement = (props) => {
  const { id } = useParams();
  console.log(id);
  let history = useHistory();
  if (id != "step1" && id != "step2") {
    history.push("/home");
  }

  const [state, setState] = useState(props.state);
  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
  }, [props.state.filtClassName]);
  return (
    <div>
      {id == "step1" ? (
        <Step1 state={props.state} />
      ) : (
        <Step_2 state={props.state} />
      )}
    </div>
  );
};

export default Announcement;
