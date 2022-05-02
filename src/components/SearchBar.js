import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form className={styles.container}>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" placeholder="Search for a country..." />
    </form>
  );
};

export default SearchBar;
