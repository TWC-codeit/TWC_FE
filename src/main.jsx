import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { ModalProvider } from "./api/ModalContext.jsx";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Modal from "/src/components/Modal";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <ModalProvider>
      <BrowserRouter>
        <Modal />
        <Header />
        <App />
      </BrowserRouter>
    </ModalProvider>
  </CookiesProvider>
);
