import PropTypes from 'prop-types';
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import React from "react";

import { AuthContext } from "../context/auth.context";

function PrivateRoute(props) {
  // Destructure the props
  const {
    toRedirect = "/login",
    exact,
    component: Component,
    ...restProps
  } = props;

  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  // If the user is not logged in ❌
  if (!isLoggedIn) return <Redirect to={toRedirect} />;

  // If the user is logged in ✅
  return <Route exact={exact} component={Component} {...restProps} />;
}

PrivateRoute.propTypes = {
  toRedirect: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ])
}

export default PrivateRoute;
