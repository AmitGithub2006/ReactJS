import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { Routes, Route } from "react-router-dom";

function LoginLogout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default LoginLogout;
