import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearchChange }) => {
  return (
    <form className={styles.container}>
      <FontAwesomeIcon icon={faSearch} />
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
