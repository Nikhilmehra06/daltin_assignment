import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { rootName } from "../utils/constant";

const PublicRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to={`${rootName}`} /> : <Outlet />;
};

export default PublicRoute;