import React from "react";
import { WiDayWindy } from "react-icons/wi";

const MainDisplay = ({ weatherData, city }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  return (
    <div className="">
      {weatherData && (
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-6">
          <div className="first min-w-56 md:mt-16">
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Pressure: {weatherData.weather[0].icon}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Max-Temperature: {weatherData.main.temp_max}°C</p>
            <p>Min-Temperature: {weatherData.main.temp_min}°C</p>
          </div>
          <div className="second col-start-2 col-span-4 flex flex-col justify-center items-center">
            <div className="relative">
              <img src={iconUrl} className="-mb-14" alt="icon" width={350} />
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold">{weatherData.name}</p>
              <p>{weatherData.weather[0].description}</p>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>{weatherData.sys.country}</p>
            </div>
          </div>
          <div className="third min-w-56 gap-4  md:mt-16">
            <p>Latitude: {weatherData.coord.lat}</p>
            <p>Longtude: {weatherData.coord.lon}</p>
            <p className="flex gap-2 ">
              <WiDayWindy size={33} /> Speed of wind: {weatherData.wind.speed}
              m/s
            </p>
          </div>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
