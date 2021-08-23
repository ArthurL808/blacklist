import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "./authService";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth
      .isAuthenticated()
      .then((res) => {
        console.log(res, "authResponse");
        setIsAuthenticated(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if(!isLoading){
        if (isAuthenticated === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
        }
      }}
    />
  );
};
