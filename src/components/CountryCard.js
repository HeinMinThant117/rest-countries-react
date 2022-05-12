import React from "react";
import styles from "./CountryCard.module.css";

const CountryCard = () => {
  return (
    <div className={styles.container}>
      <img src={require("../assets/pe.png")} />
      <div className={styles.infoContainer}>
        <h3>Germany</h3>
        <p>
          <span>Population: </span> 81,770,900
        </p>
        <p>
          <span>Region: </span> Europe
        </p>
        <p>
          <span>Capital: </span> Berlin
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CountryCard;
