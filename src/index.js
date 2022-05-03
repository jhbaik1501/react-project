import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Router from "./routes/index";
import GlobalStyles from "./GlobalStyles";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
