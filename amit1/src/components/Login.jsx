import React from "react";
import "./Logout";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const registerHandle = () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const afterRegister = document.querySelector("#afterRegister");

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    afterRegister.innerHTML = "Registration successful. Please login now";
  };

  return (
    <>
      <div className="container">
        {/* Registration starts */}
        <div className="register">
          <h1>New User !</h1>
          <input id="name" type="text" placeholder="Enter your name" />
          <br />
          <input id="email" type="email" placeholder="Enter your email" />
          <br />
          <input
            id="phone"
            type="number"
            placeholder="Enter your phone number"
          />{" "}
          <br />
          <input
            id="password"
            type="password"
            placeholder="Create new password"
          />{" "}
          <br />
          <button id="registerBtn" type="submit" onClick={registerHandle}>
            Register
          </button>
          <h4 id="afterRegister"></h4>
        </div>
        {/* Registration ends */}

        {/* Login Starts */}
        <div className="login">
          <h1>Existing User !</h1>
          <input
            id="emailLogin"
            type="email"
            placeholder="Enter registered email"
          />
          <input
            id="passwordLogin"
            type="password"
            placeholder="Enter registered password"
          />
          <Link to="/logout">
            <button id="loginBtn">Login</button>
          </Link>
          <h4 id="afterLogin"></h4>
        </div>
        {/* Login Ends */}
      </div>
    </>
  );
}

export default Login;
