import React, { useState } from "react";
import Styles from "./LoginForm.module.scss";
import { loginAction } from "../../actions";
import { useDispatch } from "react-redux";

const LoginForm = ({ ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let credentials = {
      email: email,
      password: password,
    };
    dispatch(loginAction(credentials))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        props.history.push("/");
      });
  };

  return (
    <div className={Styles.loginContainer}>
      <header>
        <div className={Styles.loginHeader}>
          <h1>Login</h1>
          <hr />
          <h3>Welcome to Hawaii's Bail Blacklist</h3>
        </div>
      </header>
      <form className={Styles.login} onSubmit={handleSubmit}>
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
        <a href="/register">Not a member click here to register.</a>
      </form>
    </div>
  );
};

export default LoginForm;
