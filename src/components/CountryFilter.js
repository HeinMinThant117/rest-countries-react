import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./CountryFilter.module.css";

const CountryFilter = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <div className={styles["filter-container"]}>
      <div
        className={styles["filter-button"]}
        onClick={() => setShowModal(!showModal)}
      >
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {showModal && (
        <ul className={styles["filter-modal"] + " poggers"}>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default CountryFilter;
