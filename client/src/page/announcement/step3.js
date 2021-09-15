import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slide from "../filtHome/home/slideShowe/slide";
import Content from "../filtHome/home/content/content";
import "./announcement.css";
import Loading from "../../loading/loading";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../myHooks/hook";

const Step2 = (props) => {
  const [loading, setLoading] = useState(<div></div>);
  let history = useHistory();
  const { request } = useHttp();

  const edit = () => {
    history.push("/add/step1");
  };

  const confirm = async () => {
    setLoading(<Loading />);
    try {
      const data = await request("/api/add", "POST", props.state, {
        "Content-Type": "application/json",
      });
      setLoading(<div></div>);
      history.push("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ marginBottom: "200px" }}>
      {loading}
      <div className="home2 home3-home">
        <header style={{ backgroundColor: "#A3A847" }}>
          <div className="container headerContainer">
            <div className="headerContent">
              <NavLink
                to={"/add/step1"}
                onClick={edit}
                className="navItems button7 button8"
              >
                edit
              </NavLink>
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
