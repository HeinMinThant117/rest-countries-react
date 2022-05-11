import React from "react";

const CountryCard = () => {
  return (
    <div>
      <img src={require("../assets/pe.png")} />
      <h3>Germany</h3>
      <p>
        Population: <span>81,770,900</span>
      </p>
      <p>
        Region: <span>Europe</span>
      </p>
      <p>
        Capital: <span>Berlin</span>
      </p>
    </div>
  );
};

export default CountryCard;
