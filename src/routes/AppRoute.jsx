import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import DetailRecipe from "../components/DetailRecipe";
import Menu from "../pages/Menu/Menu";
import Home from "../pages/Home/Home";
import ProtectedRoute from "./ProtectedRoute";
import TableDetailsMenu from "../pages/MyMenu/TableDetailsMenu";
import ContainerSearch from "../components/ContainerSearch";

const AppRoute = () => {
  const { isLogin } = useSelector((state) => state.LoginReducer);
  const isAuth = isLogin;
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/App/home/" component={Home} isAuth={isAuth} />
        <ProtectedRoute path="/App/menu/" component={Menu} isAuth={isAuth} />
        <ProtectedRoute
          path="/App/list/:querySearch"
          component={ContainerSearch}
          isAuth={isAuth}
        />

        <ProtectedRoute
          path="/App/view/:id"
          component={DetailRecipe}
          isAuth={isAuth}
        />

        {/* <ProtectedRoute path="/App/menu/" component={Menu} isAuth={isAuth} /> */}

        <ProtectedRoute
          path="/App/my-menu/"
          component={TableDetailsMenu}
          isAuth={isAuth}
        />
      </Switch>
    </div>
  );
};

export default AppRoute;
