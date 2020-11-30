import React from "react";
import "./App.css";
import Header from "../Header";
import { Redirect, withRouter } from "react-router";
import Routes from "../../Routes";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Header />

      {!user.loggedIn ? <Redirect to="/login" /> : null}

      <Routes />
    </div>
  );
}

export default withRouter(App);
