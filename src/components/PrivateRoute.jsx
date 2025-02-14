import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../api/Cookie.js";

const PrivateRoute = ({ element }) => {
  const token = getCookie("access_token");
  

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
