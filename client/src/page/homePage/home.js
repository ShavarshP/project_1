import React, { Component, useEffect, useState, useCallback } from "react";
import "./home.css";
import Manue from "./manue/manu";
import Search from "./search/search";
import List from "./list/list";
import Footer from "./footer/footer";
import { useHttp } from "../../myHooks/hook";

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

  // const getData = useCallback(async () => {
  //   try {
  //     const fetched = await useHttp().request("/api/houses");
  //     console.log("maladec");
  //     setData(fetched)
  //   } catch (e) {}
  // }, [mydata])
  //
  // useEffect(() => {
  //   getData()
  // },[getData])

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
      {mydata ? <List state={state} data={mydata} /> : <div></div>}
      <Footer />
    </div>
  );
};

export default Home;
