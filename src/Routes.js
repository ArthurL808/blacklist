import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home/";
import IndividualPerson from "./Components/Persons/individualPerson";
import RiskAssesment from "./Components/RiskAssesment";
import MyBlacklist from "./Components/MyBlacklist";
import Huntboard from "./Components/Huntboard";
import NotFound from "./Components/NotFound";
import NewPerson from "./Components/Persons/NewPerson";
import LoginForm from "./Components/LoginForm";


export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/deragatoryMarks/onPerson/:id",
    exact: true,
    component: IndividualPerson,
  },
  {
    path: "/riskAssesment",
    exact: true,
    component: RiskAssesment,
  },
  {
    path: "/myblacklist",
    exact: true,
    component: MyBlacklist,
  },
  {
    path: "/huntboard",
    exact: true,
    component: Huntboard,
  },
  {
    path: "/newPerson",
    exact: true,
    component: NewPerson,
  },
];

const Routes = () => {
  
  return (
    <Switch>
      <Route component={LoginForm} path="/login" />

      { routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;
