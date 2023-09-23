import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./responsive.css";
import { StoreContext, store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
