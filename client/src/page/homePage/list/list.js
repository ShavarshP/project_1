import React, { Component } from "react";
import "./list.css";
import ListBlok from "./saleBlok";

const List = (props) => {
  const state = [
    {
      title:"Arabkir",
      price: 888888,
      log:["https://res.akamaized.net/domain/image/upload/t_web/v1585003555/1_Stephen_Lane_Randwick_5_qali4n.jpg"],
      flor: "4/5",
      area: "110",
      rooms: "4",
    },
    {
      title:"Arabkir",
      price: 49999,
      log:
        ["https://www.topdom.ru/gallery/flats/94/1-xm.jpg",],
      flor: "2/5",
      area: "112",
      rooms: "4",
    },
    {
      title:"Arabkir",
      price: 12459,
      log:["https://res.akamaized.net/domain/image/upload/t_web/v1585003555/1_Stephen_Lane_Randwick_5_qali4n.jpg"],
      flor: "1/5",
      area: "114",
      rooms: "4",
    },{
      title:"Arabkir",
      price: 888888,
      log: ["https://res.akamaized.net/domain/image/upload/t_web/v1585003555/1_Stephen_Lane_Randwick_5_qali4n.jpg"],
      flor: "4/5",
      area: "110",
      rooms: "4",
    },
    {
      title:"Arabkir",
      price: 49999,
      log:
        ["https://www.topdom.ru/gallery/flats/94/1-xm.jpg",],
      flor: "2/5",
      area: "112",
      rooms: "4",
    },
    {
      title:"Arabkir",
      price: 12459,
      log: ["https://res.akamaized.net/domain/image/upload/t_web/v1585003555/1_Stephen_Lane_Randwick_5_qali4n.jpg"],
      flor: "1/5",
      area: "114",
      rooms: "4",
    },
  ];
  const render=state.map((item,i)=><ListBlok key={i} state={item} />)
  return (
    <div className="home14-0">
      <div className={props.state.filtClassName[1]}>
        {render}
      </div>
    </div>
  );
};

export default List;
