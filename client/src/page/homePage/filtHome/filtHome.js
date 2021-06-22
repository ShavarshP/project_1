import React, { Component, useEffect, useState } from "react";
import Search from "../search/search";
import List from "../list/list";
import Footer from "../footer/footer";
import Loading from  "../../../loading/loading"
// import { useParams } from "react-router-dom";
import filtHome from "./filtHome.module.css";

const FiltPage = (props) => {
  const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  props.state.openFiltPage();

  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    console.log(props);
  }, [props.state.filtClassName]);

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
  return (
    <div>

      {mydata ? (
        <div className="home home-filterHome">
          {" "}
          <Search state={state} /> <List state={state} data={mydata} />
        </div>
      ) : (
        <Loading/>
      )}
      <Footer />
    </div>
  );
};

export default FiltPage;
