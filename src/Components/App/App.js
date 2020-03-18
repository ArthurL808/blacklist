import React from "react";
import "./App.css";
import Header from "../Header";
import { withRouter } from "react-router";
import Routes from "../../Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default withRouter(App);
