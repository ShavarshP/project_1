import React, { Component, useEffect, useState } from "react";
import Search from "../search/search";
import List from "../list/list";
import Footer from "../footer/footer";
import Loading from "../../../loading/loading";
// import { useParams } from "react-router-dom";
import filtHome from "./filtHome.module.css";
import Header from "../../filtHome/header/header";

const FiltPage = (props) => {
  const [state, setState] = useState(props.state);
  const [filt, setFilt] = useState(props.state.filt);
  const [mydata, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  props.state.openFiltPage();

  const getdata = () => {
    setData(null)
    console.log("apres shavarsh");
    fetch("/api/filtPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.state.filt),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("aprs");
          setData(result);
        },
        (error) => {
          console.log(true);
        }
      );
  };

  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    getdata();
  }, []);

  return (
    <div>
      <Header />
      {mydata ? (
        <div>
          <div className="home home-filterHome">
            {" "}
            <Search state={state} getdata={getdata} />{" "}
            <List state={state} data={mydata} />
          </div>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FiltPage;
