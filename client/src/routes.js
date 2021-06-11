import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./page/homePage/home";
import Announcement from "./page/announcement/announcement";
import Manue from "./page/homePage/manue/manu"
import HomePage from "./page/filtHome/home/home"
import FiltPage from "./page/homePage/filtHome/filtHome"

export const useRoutes = (props) => {

  return (
    <Switch>
      <Route path="/home" exact>
        <Home state={props.state} />
      </Route>
      <Route path="/add">
        <Announcement/>
      </Route>
      <Route path="/myhome/:id">
      <Manue/>
      <HomePage/>
      </Route>
      <Route path="/filtPage">
      <FiltPage state={props.state}/>
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  );
};
