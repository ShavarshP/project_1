import React, { Component, useEffect, useState, useCallback } from "react";
import "./home.css";
import Manue from "./manue/manu";
import Search from "./search/search";
import List from "./list/list";
import Footer from "./footer/footer";
import { useHttp } from "../../myHooks/hook";
import MiniLoading from "../../loading/miniLoading";

const Home = (props) => {
  const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  props.state.openHomePage();

  useEffect(() => {
    fetch("/api/houses")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
        }
      );
  }, []);

  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
  }, [props.state.filtClassName]);

  return (
    <div className="home">
      <Manue />
      <Search state={props.state} />
      <h2 className="home__title">New announcements</h2>
      <hr style={{ border: "1px solid #676662" }} />
      {mydata ? <List state={state} data={mydata} /> : <MiniLoading/>}
      <Footer />
    </div>
  );
};

export default Home;
