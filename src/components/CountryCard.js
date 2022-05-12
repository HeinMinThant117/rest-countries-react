import React from "react";
import styles from "./CountryCard.module.css";
import { formatPopulation } from "../utils";

const CountryCard = ({ country }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={country.flags.png} />
      </div>
      <div className={styles.infoContainer}>
        <h3>{country.name.common}</h3>
        <p>
          <span>Population: </span> {formatPopulation(country.population)}
        </p>
        <p>
          <span>Region: </span> {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital || "No Capital"}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default CountryCard;
