import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="userPage">
      <h1 className="userHeading">Welcome {localStorage.name}</h1>
      <Link to="/">
        <button id="logoutBtn">Logout</button>
      </Link>
    </div>
  );
}

export default Logout;
