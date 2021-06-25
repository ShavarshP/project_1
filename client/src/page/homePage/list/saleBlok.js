import React, { Component } from "react";
import "./list.css";
import { NavLink } from "react-router-dom";

const ListBlok = (props) => {

  return (
    <div className="product-item">
      <div className="product-img">
        <NavLink to={"/myhome/" + props.state._id}>
          <img src={props.state.img[0]} />
        </NavLink>
      </div>
      <div className="product-list">
        <h3>{props.state.title}</h3>

        <span className="price">$ {props.state.price}</span>
        <div className="actions">
          <div className="add-to-cart">
            <NavLink to={"/myhome/" + props.state._id} className="cart-button">
              {props.state.area}.sq m
            </NavLink>
          </div>
          <div className="add-to-links">
            <NavLink to={"/myhome/" + props.state._id} className="cart-button">
              {props.state.rooms}.room
            </NavLink>
            <NavLink
              to={"/myhome/" + props.state._id}
              className="compare"
            ></NavLink>
            <NavLink to={"/myhome/" + props.state._id} className="cart-button">
              {props.state.flor}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlok;
