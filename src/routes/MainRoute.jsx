import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../pages/Login/Login";
// import NotFound from "../pages/NotFound";
import { getValue } from "../utils/localStorage";
import { setToken } from "../actions/loginAction";
import AppContainerPage from "./AppContainerPage";
import ProtectedRoute from "./ProtectedRoute";

const MainRoute = () => {
  const { isLogin } = useSelector((state) => state.LoginReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      history.push("/App/home/");
    }

    if (!isLogin) {
      let token = getValue("token");
      token && dispatch(setToken(token));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <Switch>
      {/* <Route exact={true} path="/" component={Login} /> */}
      <Route path="/Login" component={Login} />
      <ProtectedRoute isAuth={isLogin} component={AppContainerPage} />

      {/* <ProtectedRoute path="/App/" component={NotFound} isAuth={isAuth} />
      <ProtectedRoute component={NotFound} isAuth={isAuth} /> */}
    </Switch>
  );
};

export default MainRoute;
