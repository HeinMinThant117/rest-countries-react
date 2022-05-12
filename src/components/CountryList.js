import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";

const CountryList = ({ search, countries }) => {
  return (
    <div className={styles.container}>
      {countries
        .filter((country) => new RegExp(search, "i").test(country.name.common))
        .map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
    </div>
  );
};

export default CountryList;
