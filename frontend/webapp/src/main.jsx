import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import "./responsive.css";

import { router } from "./routes/routes";
import { StoreContext, store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
