import "./App.css";
import CityWeatherSearch from "./components/Search";
import { useState } from "react";
import MainDisplay from "./components/MainDisplay";
import Data from "./api/Data";
import Icon from "./components/Icon";
import MultipleIcons from "./components/MultipleIcons";
import FavouriteCities from "./components/FavouriteCities";

// const App = () => {
//   const [weatherData, setWeatherData] = useState();
//   const [city, setCity] = useState("");
//   const [notFound, setNotFound] = useState(false);
//   const apiKey = "b4ec2168bc9a991595d49a3b361958a0";
//123
//   const handleCitySelect = async (city) => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//       );ose custome directionsappend sa
//here we need to check those attributes after those issues are deleted then we will add they will be effective from my own attributes ll be effective from my ownthey wil be h
//       if (response.ok) {
//         const data = await response.json();
//         setWeatherData(data);
//         console.log(data);
//         setNotFound(false);
//       } else {
//         setNotFound(true);
//       }
//     } catch (error) {
//       alert("Error fetching weather data:", error);
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   return (
//     <>
//       <div className="w-full  min-h-screen flex flex-col items-center text-slate-200 bg-gray-900 p-4  md:px-32 md:py-20">
//         <MainDisplay weatherData={weatherData} city={city} />
//         <MultipleIcons />
//         <CityWeatherSearch
//           onCitySelect={handleCitySelect}
//           notFound={notFound}
//         />
//       </div>
//     </>
//   );
// };

// export default App;

// ... (your existing imports)

const App = () => {
  const [weatherData, setWeatherData] = useState(null); // Initialize with null
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "b4ec2168bc9a991595d49a3b361958a0";

  const handleCitySelect = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setNotFound(false);
        console.log(data);
        const {
          name,
          main,
          weather,
          wind,
          sys: { sunrise, sunset },
        } = weatherData;
      } else {
        setNotFound(true);
        if (!response.ok && response.status === 0) {
          setError("Network error. Please check your internet connection.");
        } else {
          // You can customize this part based on the specific error conditions
          setError(`Error: ${error.message}`);
        }
      }
    } catch (error) {
      console.error("Sallah Error fetching weather data:", error);
      // Handle error by setting an error message in state if needed
      setNotFound(true);
    }
  };

  return (
    <>
      <div className="w-full  min-h-screen flex flex-col items-center text-slate-200 bg-gray-900 p-4  md:px-32 md:py-20">
        <MainDisplay weatherData={weatherData} error={error} />
        <MultipleIcons />

        <CityWeatherSearch
          onCitySelect={handleCitySelect}
          notFound={notFound}
        />
        <FavouriteCities Data={Data} />
      </div>
    </>
  );
};

export default App;
