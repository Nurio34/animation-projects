import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalApp from "./GlobalApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalApp>
        <App />
    </GlobalApp>,
);
