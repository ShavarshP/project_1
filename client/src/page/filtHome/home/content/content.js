import React, { Component } from "react";
import "./content.css";


const Content = (props) => {
  console.log(props);
  return (
    <div className="conect-contener">
    <a  style={{color:"#f50000",  position: "absolute", right: "0px",fontSize: "40px"}}>{props.state.price}$</a>
    <a className="conects">{props.state.loc}</a>
    <a className="conects">street-{props.state.street}</a>
    <a className="conects">{props.state.rooms} to. flat</a>
    <a className="conects">area {props.state.area} m²</a>
    <a className="conects">{props.state.flor} fl.</a>
    <div className="description-contener">
    <p className="conects boconi-tekst">{props.state.description}</p>
    </div>
    </div>
  );
};

export default Content;
