import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticatedAction } from "./actions";
import { useDispatch, useSelector } from "react-redux";


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(isAuthenticatedAction())
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoading) {
          if (user.isAuthenticated === true) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }
      }}
    />
  );
};
