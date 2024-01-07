import React, { useState } from "react";
import cities from "../api/Cities";

const CityWeatherSearch = ({ onCitySelect, notFound }) => {
  const [city, setCity] = useState("");
  const [suggestedCities, setSuggestedCities] = useState([]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);

    // Filter city names based on user input for suggestions
    const filteredCities = cities.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedCities(filteredCities);
  };

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setSuggestedCities([]);
    onCitySelect(selectedCity); // Trigger weather fetch for the selected city
  };
  return (
    <div className="md:mt-40">
      {notFound && (
        <p className="text-md text-red-600 w-2/3">
          Sorry, this city doesn't have data. please select near one!
        </p>
      )}
      <div className="w-80 h-40 overflow-y-scroll border-2 border-red-300">
        <input
          type="text"
          className="w-52 h-8 bg-slate-800 border-2 rounded-lg text-white"
          placeholder="Search for a city..."
          value={city}
          onChange={handleCityChange}
        />
        <ul>
          {suggestedCities.map((suggestedCity, index) => (
            <li key={index} onClick={() => handleCitySelection(suggestedCity)}>
              {suggestedCity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityWeatherSearch;
