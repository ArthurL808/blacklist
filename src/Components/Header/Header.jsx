import React from "react";
import Styles from "./Header.module.scss";
import auth from "../../authService";
import { withRouter } from "react-router-dom";

const Header = ({ ...props }) => {
  return (
    <div className={Styles.header}>
      <h1>
        <a href="/">Blacklist</a>
      </h1>
      <ul className={Styles.nav}>
        <li>
          <a href="/huntboard">Huntboard</a>
        </li>
        {/* <li>
          <a href="/riskassesment">Risk Assesment</a>
        </li> */}
        <li>
          <a href="/myblacklist">My Blacklist</a>
        </li>
        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/login");
            });
          }}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default withRouter(Header);
