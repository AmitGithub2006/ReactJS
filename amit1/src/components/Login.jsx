import React from "react";
import "./Login.css";

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

  const loginHandle = () => {
    const container = document.querySelector(".container");
    const emailLogin = document.querySelector("#emailLogin").value;
    const passwordLogin = document.querySelector("#passwordLogin").value;
    const afterLogin = document.querySelector("#afterLogin");
    const logoutBtn = document.querySelector("#logoutBtn");

    const firstCondition = () => {
      container.style.display = "none";

      const userHeading = document.querySelector(".userHeading");

      userHeading.innerHTML = `Welcome ` + localStorage.name;

      logoutBtn.style.display = "block";
    };

    const secondCondition = () => {
      afterLogin.innerHTML = `Invalid credentials. Please try again`
    };

    if (
      emailLogin === localStorage.email &&
      passwordLogin === localStorage.password
    ) {
      firstCondition();
    } else {
      secondCondition();
    }
  };

  const logoutHandle = () => {
    const container = document.querySelector(".container");
    const userHeading = document.querySelector(".userHeading");
    const logoutBtn = document.querySelector("#logoutBtn");

    container.style.display = 'block';
    userHeading.innerHTML = '';

    logoutBtn.style.display = 'none';
  }

  return (
    <>
      <div className="container">
        {/* Registration starts */}
        <div className="register">
          <h1>New User !</h1>
          <input id="name" type="text" placeholder="Enter your name" /><br />
          <input id="email" type="email" placeholder="Enter your email" /><br />
          <input
            id="phone"
            type="number"
            placeholder="Enter your phone number"
          /> <br />
          <input
            id="password"
            type="password"
            placeholder="Create new password"
          /> <br />
          <button id="registerBtn" type="submit" onClick={registerHandle}>
            Register
          </button>
          <h5 id="afterRegister"></h5>
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
          <button id="loginBtn" onClick={loginHandle}>
            Login
          </button>
          <h5 id="afterLogin"></h5>
        </div>
        {/* Login Ends */}
      </div>

      <div className="userPage">
        <h1 className="userHeading"></h1>
        <button
          id="logoutBtn"
          onClick={logoutHandle}
          style={{ display: "none" }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Login;
