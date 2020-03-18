import React from "react";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.header}>
        <h1>Blacklist</h1>
      <ul className={Styles.nav}>
        <li>Cosigners</li>
        <li>Defendants</li>
        <li>Risk Assesment</li>
        <li>My Blacklist</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Header;
