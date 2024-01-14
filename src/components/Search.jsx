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
    <div className=" min-w-80 max-w-[500px] md:mt-40 z-30 text-center flex flex-col items-center">
      {notFound && (
        <p className="text-lg text-red-500 text-center ">
          Sorry, this city doesn't have data. please select near one!
        </p>
      )}
      <div className="text-start w-full h-40 p-2 text-md overflow-y-scroll  roundedm-sm border-2 border-slate-600 rounded-xl ">
        <input
          type="text"
          className="w-full outline-none border-0 border-b-2 bg-transparent  border-slate-600 p-1  h-9 bg-slate-800 text-white"
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
