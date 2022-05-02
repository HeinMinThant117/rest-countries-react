import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./CountryFilter.module.css";

const CountryFilter = () => {
  return (
    <div className={styles.container}>
      <p>Filter by Region</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default CountryFilter;
