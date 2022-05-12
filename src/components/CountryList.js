import React from "react";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";

const CountryList = ({ search, filter, countries }) => {
  return (
    <div className={styles.container}>
      {countries
        .filter((country) => new RegExp(search, "i").test(country.name.common))
        .filter((country) => new RegExp(filter, "i").test(country.region))
        .map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
