import React, { Component, useState, useEffect } from "react";
import "./home.css";
import Slide from "./slideShowe/slide";
import Content from "./content/content";
import { useParams } from "react-router-dom";
import Block from "./ControlBlock/block";
import Loading from "../../../loading/loading";

const Home = (props) => {
  const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {

    fetch("/api/myhome/" + id)
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
        <div>
          <div className="content-home">
            <Slide img={mydata[0].img} /> <Content state={mydata[0]} />
          </div>
          <Block />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
