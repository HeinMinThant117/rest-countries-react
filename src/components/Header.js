import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>Where in the world?</h3>
        <div className={styles["theme-container"]}>
          <FontAwesomeIcon
            className={styles["dark-container"]}
            icon={faMoon}
            rotation={360}
          />
          <p>Dark Mode</p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
