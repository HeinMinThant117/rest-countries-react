import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  if (countries.length <= 0) return null;

  return (
    <div className={styles.container}>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
