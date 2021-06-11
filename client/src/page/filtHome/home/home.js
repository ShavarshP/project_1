import React, { Component } from "react";
import "./home.css";
import Slide from "./slideShowe/slide";
import Content from "./content/content";
import Map from "./map/map";

const Home = (props) => {
  const prop = {
    id: 1,
    loc: "Arabkir",
    street: "kievyan",
    title: "Arabkir",
    price: 89000,
    flor: "4/5",
    area: "110",
    rooms: "4",
    description:
      "pstik jstik napastak nkarum e napastak inchu e nstat tari tak ari gnaq hac utenq vayqef ane verj@ i jerjo napastaki xovat aneq",
    img: [
      "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
      "https://hometobe.ru/assets/images/DSC05680.jpg",
      "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
      "https://centreservices.ru/images/chastichniy_remont.jpg",
      "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
      "https://centreservices.ru/images/chastichniy_remont.jpg",
      "https://hometobe.ru/assets/images/DSC05680.jpg",
      "https://design-homes.ru/images/galery/2417/posledovatelnost-remonta-v-kvartire_5f508334b1fdd.jpeg",
      "https://imperia-design.ru/assets/images/evroremont-new-1-1.jpg",
      "https://centreservices.ru/images/chastichniy_remont.jpg",
    ],
  };

  return (
    <div>
      <div className="content-home">
        <Slide img={prop.img} />
        <Content state={prop} />
      </div>
      <Map/>
    </div>
  );
};

export default Home;
