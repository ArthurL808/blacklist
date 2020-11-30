import React, { useState } from "react";
import { connect } from "react-redux";
import Styles from "./LoginForm.module.scss";
import { loginAction } from "../../actions";

const LoginForm = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let credentials = {
      email: email,
      password: password,
    };
    props.login(credentials);
    props.history.replace("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />

        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <input type="submit" value="Login" />
      </form>
      <a href="">Not a member click here to register.</a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(loginAction(credentials));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
