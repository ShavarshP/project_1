import React, { useState } from "react";
import Slide from "../filtHome/home/slideShowe/slide";
import Content from "../filtHome/home/content/content";
import "./announcement.css";

const Step2 = (props) => {
  // <div className="content-home">
  //   <Slide  /> <Content />
  // </div>
  // <Slide img={mydata[0].img} /> <Content state={mydata[0]}/>
  const edit = () => {
    console.log(props.state);
  };
  const confirm = async () => {

    await fetch("/api/add2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(props.state ),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(true);
        }
      );
  };
  return (
    <div>
      <div className="home2 home3-home">
        <header>
          <div className="container headerContainer">
            <div className="headerContent">
              <a onClick={edit} className="navItems button7 button8">
                edit
              </a>
            </div>
            <nav className="nav headerNav">
              <a onClick={confirm} className="navItems button7 button8">
                confirm
              </a>
            </nav>
          </div>
        </header>
      </div>
      <div className="content-home">
        <Slide img={props.state.img} />
        <Content state={props.state} />
      </div>
    </div>
  );
};

export default Step2;
