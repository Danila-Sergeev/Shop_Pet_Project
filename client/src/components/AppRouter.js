import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { v4 as uuidv4 } from "uuid";

const AppRouter = (props) => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={uuidv4} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={uuidv4} path={path} component={Component} exact />
      ))}
    </Switch>
  );
};

export default AppRouter;
