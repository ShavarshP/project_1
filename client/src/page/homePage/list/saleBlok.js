import React, { Component } from "react";
import "./list.css";

const ListBlok = (props) => {
  
  return (
    <div className="product-item">
      <div className="product-img">
        <a href="">
          <img src={props.state.log} />
        </a>
      </div>
      <div className="product-list">
        <h3>{props.state.title}</h3>

        <span className="price">$ {props.state.price}</span>
        <div className="actions">
          <div className="add-to-cart">
            <a href="" className="cart-button">
              {props.state.area}.sq m
            </a>
          </div>
          <div className="add-to-links">
            <a href="" className="cart-button">
              {props.state.rooms}.room
            </a>
            <a href="" className="compare"></a>
            <a href="" className="cart-button">
              {props.state.flor}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlok ;
