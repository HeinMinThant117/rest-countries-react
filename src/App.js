import "./App.css";
import CountryFilter from "./components/CountryFilter";
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
      </main>
    </div>
  );
};

export default App;
