import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/reset.css";
import "./css/timeline.css";
import "./css/login.css";
import * as serviceWorker from "./serviceWorker";
import Login from "./components/Login";
import { Router, Route, browserHistory } from "react-router";

function verificaAutenticacao(nextStage, replace) {
  if (localStorage.getItem("auth-token") == null) {
    replace("/");
  }
}
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/timeline" component={App} onEnter={verificaAutenticacao} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
