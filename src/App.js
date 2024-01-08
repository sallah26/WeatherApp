import "./App.css";
import CityWeatherSearch from "./components/Search";
import { useState } from "react";
import MainDisplay from "./components/MainDisplay";
import Data from "./api/Data";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [notFound, setNotFound] = useState(false);
  const apiKey = "b4ec2168bc9a991595d49a3b361958a0";

  const handleCitySelect = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        // alert(data);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      alert("Error fetching weather data:", error);
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center text-slate-200 bg-gray-900 p-4  md:px-32 md:py-20 ">
        <MainDisplay weatherData={Data} city={city} />
        <CityWeatherSearch
          onCitySelect={handleCitySelect}
          notFound={notFound}
        />
      </div>
    </>
  );
};

export default App;
