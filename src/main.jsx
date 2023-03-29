import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./components/GlobalContext/GlobalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <AppContext>
    <App />
  </AppContext>
);
