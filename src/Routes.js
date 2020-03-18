import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home/";
import Cosigners from "./Components/Cosigners";
import Defendants from "./Components/Defendants";
import RiskAssesment from "./Components/RiskAssesment";
import MyBlacklist from "./Components/MyBlacklist";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/cosigners",
    exact: true,
    component: Cosigners
  },
  {
    path: "/defendants",
    exact: true,
    component: Defendants
  },
  {
    path: "/riskassesment",
    exact: true,
    component: RiskAssesment
  },
  {
    path: "/myblacklist",
    exact: true,
    component: MyBlacklist
  }
];

const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={`global_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};
export default Routes;
