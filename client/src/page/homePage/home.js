import React, { Component, useEffect, useState } from "react";
import "./home.css";
import Manue from "./manue/manu";
import Search from "./search/search";
import List from "./list/list";
import Footer from "./footer/footer";

const Home = (props) => {
  const [state, setState] = useState(props.state);
  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    
  }, [props.state.filtClassName]);
  props.state.openHomePage();

  return (
    <div className="home">
      <Manue />
      <Search state={props.state} />
      <h2 className="home__title">New announcements</h2>
      <hr style={{ border: "1px solid #676662" }} />
      <List state={props.state} />
      <Footer />
    </div>
  );
};

export default Home;
