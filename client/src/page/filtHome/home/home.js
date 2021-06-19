import React, { Component, useState, useEffect } from "react";
import "./home.css";
import Slide from "./slideShowe/slide";
import Content from "./content/content";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch("/api/myhome", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id: id }),
    })
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
        <div className="content-home">
          <Slide img={mydata[0].img} /> <Content state={mydata[0]} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
