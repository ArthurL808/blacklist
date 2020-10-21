import React from "react";
import { connect } from "react-redux";
import Styles from "./Header.module.scss";
import { logoutAction } from "../../actions/index";
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
        <button onClick={props.logout}>Logout</button>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutAction());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
