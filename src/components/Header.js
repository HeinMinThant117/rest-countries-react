import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="container">
      <h3>Where in the world?</h3>
      <div className="theme-container">
        <FontAwesomeIcon className="dark-icon" icon={faMoon} rotation={360} />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
