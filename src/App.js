import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleFilterChange = (e) =>
    e.target.innerText === filter
      ? setFilter("")
      : setFilter(e.target.innerText);

  if (countries.length <= 0) {
    return null;
  }

  return (
    <div>
      <main className="main-container">
        <div className="search-filter-container">
          <SearchBar handleSearchChange={handleSearchChange} />
          <CountryFilter
            handleFilterChange={handleFilterChange}
            filter={filter}
          />
        </div>
        <CountryList search={search} filter={filter} countries={countries} />
      </main>
    </div>
  );
};

export default App;
