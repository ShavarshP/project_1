import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slide from "../filtHome/home/slideShowe/slide";
import Content from "../filtHome/home/content/content";
import "./announcement.css";
import Loading from "../../loading/loading";


const Step2 = (props) => {
  const [loading, setLoading] = useState(<div></div>);
  let history = useHistory();
  const edit = () => {};
  
  const confirm = async () => {
    setLoading(<Loading />);
    await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(props.state),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("maladec");
          setLoading(<div></div>);
          history.push("/home");
        },
        (error) => {
          setLoading(<div></div>);
          console.log(true);
        }
      );
  };
  return (
    <div style={{ marginBottom: "200px" }}>
      {loading}
      <div className="home2 home3-home">
        <header style={{ backgroundColor: "#A3A847" }}>
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
