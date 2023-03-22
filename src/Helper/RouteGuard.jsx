import React from "react";
import { Navigate } from "react-router-dom";
import { useLoginContext } from "../LoginProvider";

const RouteGuard = ({ children }) => {
  const { loggedin } = useLoginContext();
  if (loggedin) return children;
  else return <Navigate to="/" replace />;
};
export default RouteGuard;
