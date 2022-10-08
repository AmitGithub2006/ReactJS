import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { TodoApp } from "./components/TodoApp";
import { Api } from "./components/Api";
// import { Weather } from "./components/Weather";
import { GitAPI } from "./components/GitAPI";
import { GitData } from "./components/GitData";
import { Covid } from "./components/CovidFetch/Covid";
import Form from "./components/Form";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp /> */}
    {/* <Api /> */}
    {/* <Weather /> */}
    {/* <GitAPI /> */}
    {/* <GitData /> */}
    {/* <Covid /> */}
    {/* <Form /> */}
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
