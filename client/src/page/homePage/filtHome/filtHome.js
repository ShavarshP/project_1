import React, { Component, useEffect, useState } from "react";
import Search from "../search/search";
import List from "../list/list";
import Footer from "../footer/footer";
import { useParams } from "react-router-dom";
import filtHome from "./filtHome.module.css";

const FiltPage = (props) => {
  const [state, setState] = useState(props.state);
  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    console.log(props);
  }, [props.state.filtClassName]);
  props.state.openFiltPage();
  return (
    <div>
      <div className="home home-filterHome">
        <Search state={state} />
        <List state={state} />
      </div>
      <Footer />;
    </div>
  );
};

export default FiltPage;
