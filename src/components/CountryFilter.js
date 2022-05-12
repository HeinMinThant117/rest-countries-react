import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./CountryFilter.module.css";

const countries = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antartica",
];

const CountryFilter = ({ handleFilterChange, filter }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles["filter-container"]}>
      <div
        className={styles["filter-button"]}
        onClick={() => setShowModal(!showModal)}
      >
        <p>{filter ? filter : "Filter By Region"}</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {showModal && (
        <ul className={styles["filter-modal"]}>
          {countries.map((country, index) => (
            <li onClick={handleFilterChange} key={index}>
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryFilter;
