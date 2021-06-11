import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import state from "./state/state";
import { restart } from "./render";

restart(state);

registerServiceWorker();
