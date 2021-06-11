import React, { Component, useRef,} from "react";
import "./map.css";


const Map = (props) => {
  const map = useRef();
  console.log(map.current);
  return (
    <div className="map-contener" ref={map} >

    </div>
  );
};

export default Map;
