import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.header}>
      <h1>
        <a href="/">Blacklist</a>
      </h1>
      <ul className={Styles.nav}>
        <li>
          <a href="/cosigners">Cosigners</a>
        </li>
        <li>
          <a href="/defendants">Defendants</a>
        </li>
        <li>
          <a href="/riskassesment">Risk Assesment</a>
        </li>
        <li>
          <a href="/myblacklist">My Blacklist</a>
        </li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Header;
