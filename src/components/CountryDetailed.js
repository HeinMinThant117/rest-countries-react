import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatPopulation } from "../utils";
import styles from "./CountryDetailed.module.css";

const CountryDetailed = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${countryName}`)
      .then((response) => setCountry(response.data[0]));
  }, [countryName]);

  if (!country) return null;

  return (
    <div className={styles.container}>
      <Link to="/">Back</Link>
      <div>
        <img src={country.flags.png} />
      </div>
      <h3>{country.name.common}</h3>
      <p>
        <span>Native Name: </span>
        {
          country.name.nativeName[Object.keys(country.name.nativeName)[0]]
            .official
        }
      </p>
      <p>
        <span>Population: </span>
        {formatPopulation(country.population)}
      </p>
      <p>
        <span>Region: </span>
        {country.region}
      </p>
      <p>
        <span>Sub Region: </span>
        {country.subregion}
      </p>
      <p>
        <span>Capital: </span>
        {country.capital}
      </p>
      <p>
        <span>Top Level Domain: </span>
        {country.tld[0]}
      </p>
      <p>
        <span>Currencies: </span>
        {Object.keys(country.currencies).map(
          (currency) => country.currencies[currency].name
        )}
      </p>
      <p>
        <span>Languages: </span>
        {Object.keys(country.languages).map(
          (language) => country.languages[language]
        )}
      </p>
      <div>
        <p>Border Countries</p>
      </div>
    </div>
  );
};

export default CountryDetailed;
