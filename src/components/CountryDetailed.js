import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addCommas, formatPopulation } from "../utils";
import styles from "./CountryDetailed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetailed = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    if (countryName) {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => {
          setCountry(response.data[0]);
        });
    }
  }, [countryName]);

  useEffect(() => {
    if (country) {
      let borders = country.borders;
      let borderPromises = [];

      for (let i = 0; i < borders.length; i++) {
        let borderPromise = axios.get(
          `https://restcountries.com/v3.1/alpha/${borders[i]}?fields=name`
        );

        borderPromises.push(borderPromise);
      }

      Promise.all(borderPromises).then((values) =>
        setBorders(values.map((value) => value.data.name.common))
      );
    }
  }, [country]);

  if (!country) return null;

  return (
    <div className={styles.container}>
      <div className={styles.backContainer}>
        <Link to="/" className={styles.btnBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <img src={country.flags.png} />
      </div>
      <div className={styles.infoContainer}>
        <h3>{country.name.common}</h3>
        <div className={styles.infoSection}>
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
        </div>
        <div className={styles.infoSection}>
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
            {addCommas(Object.values(country.languages))}
          </p>
        </div>
        <div className={styles.borderContainer}>
          <p>Border Countries:</p>
          <div className={styles.borderCountriesContainer}>
            {borders.map((border, index) => (
              <Link
                to={`/${border}`}
                key={index}
                className={styles.borderCountry}
              >
                {border}
              </Link>
            ))}
            {/* <div className={styles.borderCountry}>France</div> */}
            {/* <div className={styles.borderCountry}>Germany</div> */}
            {/* <div className={styles.borderCountry}>Netherlands</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailed;
