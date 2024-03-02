import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { v4 as uuidv4 } from "uuid";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = (props) => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={uuidv4} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={uuidv4} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
