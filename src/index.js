import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetailed from "./components/CountryDetailed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path=":countryName" element={<CountryDetailed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
