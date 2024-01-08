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
      <div className="min-w-72 h-40 p-2 text-md overflow-y-scroll roundedm-sm border-2 border-slate-600 rounded-xl ">
        <input
          type="text"
          className="w-full outline-none border-0 border-b-2 bg-transparent  border-slate-400 p-1  h-9 bg-slate-800 border-2 text-white"
          placeholder="Search for the city..."
          value={city}
          onChange={handleCityChange}
        />
        <ul className="ml-1 text-sm">
          {suggestedCities.map((suggestedCity, index) => (
            <li
              key={index}
              onClick={() => handleCitySelection(suggestedCity)}
              className="cursor-pointer text-md "
            >
              {suggestedCity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CityWeatherSearch;
