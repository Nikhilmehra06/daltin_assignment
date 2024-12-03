import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { rootName } from "../utils/constant";

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={`${rootName}login`} />;
};

export default PrivateRoute;
