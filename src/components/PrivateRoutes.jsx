import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = (props) => {
  let location = useLocation();
  return props.auth ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
