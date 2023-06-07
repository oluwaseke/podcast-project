import "./index.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/dashboard";
import Error from "./pages/Error";
import ForgotPassword from "./pages/forgotPassword";
import ForgotPassword2 from "./pages/forgotPassword2";
import ForgotPassword3 from "./pages/forgotPassword3";
import InTheKnow from "./pages/intheknow";
import LiveStories from "./pages/live-stories";
import Login from "./pages/login";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./PageLayout/Root";
import SignUp from "./pages/signup";
import Sport from "./pages/sport";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/forgotPassword2" element={<ForgotPassword2 />} />
      <Route path="/forgotPassword3" element={<ForgotPassword3 />} />
      <Route path="/live-stories" element={<LiveStories />} />
      <Route path="/intheknow" element={<InTheKnow />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" component={Error} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
