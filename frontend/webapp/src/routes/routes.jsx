import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import HomePage from "../App/home/HomePage"

export const Routes = (
  <Route path={"/"} element={<App />}>
    <Route path="*" element={<h1>Page Not Found</h1>} />

    <Route path="" element={<HomePage />} />
  </Route>
);

export const router = createBrowserRouter(createRoutesFromElements(Routes));
