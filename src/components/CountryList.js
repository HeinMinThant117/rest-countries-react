import React from "react";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";

const CountryList = () => {
  return (
    <div className={styles.container}>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryList;
