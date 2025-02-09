import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </CookiesProvider>
);
