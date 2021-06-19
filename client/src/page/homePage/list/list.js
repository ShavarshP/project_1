import React, { Component } from "react";
import "./list.css";
import ListBlok from "./saleBlok";

const List = (props) => {
  console.log(props.data);
  const state = props.data;

  const render = state.map((item, i) => <ListBlok key={i} state={item} />);
  return (
    <div className="home14-0">
      <div className={props.state.filtClassName[1]}>{render}</div>
    </div>
  );
};

export default List;
