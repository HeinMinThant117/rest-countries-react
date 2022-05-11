import "./App.css";
import CountryFilter from "./components/CountryFilter";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main-container">
        <div className="search-filter-container">
          <SearchBar />
          <CountryFilter />
        </div>
        <CountryList />
      </main>
    </div>
  );
};

export default App;
