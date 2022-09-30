import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { TodoApp } from "./components/TodoApp";
// import { Api } from "./components/Api";
// import { Weather } from "./components/Weather";
import { GitAPI } from "./components/GitAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp /> */}
    {/* <Api /> */}
    {/* <Weather /> */}
    <GitAPI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
