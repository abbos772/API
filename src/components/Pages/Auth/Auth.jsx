import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function Auth() {
  let isLogin = true;
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
}

export default Auth;
