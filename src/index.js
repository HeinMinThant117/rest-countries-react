import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetailed from "./components/CountryDetailed";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index={true} element={<App />} />
          <Route path=":countryName" element={<CountryDetailed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
