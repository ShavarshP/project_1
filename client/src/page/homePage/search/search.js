import React, { Component, useRef, useEffect, useState} from "react";
import "./search.css";
import Flat from "./flat/flat";

const Search = (props) => {
  const [state, setState] = useState(props.state);
  console.log(props);
  useEffect(() => {
    console.log("maladec", props);
  }, [state]);


  const inputEl = useRef();
  const inputE2 = useRef();
  const inputE3 = useRef();
  const inputE4 = useRef();
  const classCe=()=>{
    inputEl.current.className = "homelog-blok";
    inputE2.current.className = "homelog-blok";
    inputE3.current.className = "homelog-blok";
    inputE4.current.className = "homelog-blok";
  }

  const onButtonClickflat = (ref) => {
    classCe()
    ref.current.className = "homelog-blok log-blok";
    props.state.flat();
    setState((prevState) => {
      return   props.state.flat();
    });

  };
  const onButtonClickHome = (ref) => {
    classCe()
    ref.current.className = "homelog-blok log-blok";
    props.state.home();
    setState((prevState) => {
      return   props.state.home();
    });
  };
  const onButtonClickshop = (ref) => {
    classCe()
    ref.current.className = "homelog-blok log-blok";
    props.state.shop();
    console.log(props.state.shop());
    setState((prevState) => {
      return   props.state.shop();
    });
  };
  const onButtonClickland = (ref) => {
    classCe()
    ref.current.className = "homelog-blok log-blok";
    props.state.land();
    setState((prevState) => {
      return   props.state.land();
    });
  };
  return (
    <header className="home-header3">
      <div className={props.state.filtClassName[2]}>
        <div className="type">
          <div className={props.state.filtClassName[3]}>
            <div
              className="homelog-blok log-blok"
              ref={inputE2}
              onClick={() => {
                onButtonClickflat(inputE2);
              }}
            >
              <img
                className="homelog"
                src="https://image.flaticon.com/icons/png/512/535/535020.png"
              ></img>
            </div>
            <div
              className="homelog-blok"
              ref={inputEl}
              onClick={() => {
                onButtonClickHome(inputEl);
              }}
            >
              <img
                className="homelog"
                src="https://img.icons8.com/emoji/452/house-with-garden.png"
              ></img>
            </div>
            <div
              className="homelog-blok"
              ref={inputE3}
              onClick={() => {
                onButtonClickshop(inputE3);
              }}
            >
              <img
                className="homelog"
                src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png"
              ></img>
            </div>
            <div
              className="homelog-blok"
              ref={inputE4}
              onClick={() => {
                onButtonClickland(inputE4);
              }}
            >
              <img
                className="homelog"
                src="https://image.flaticon.com/icons/png/512/366/366918.png"
              ></img>
            </div>
          </div>
        </div>
        <Flat state={state} />
      </div>
    </header>
  );
};

export default Search;
