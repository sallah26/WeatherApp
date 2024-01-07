import React from "react";

const MainDisplay = ({ weatherData, city }) => {
  return (
    <div className="lg:absolute">
      {weatherData && (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="first">
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Max-Temperature: {weatherData.main.temp_max}°C</p>
            <p>Min-Temperature: {weatherData.main.temp_min}°C</p>
          </div>
          <div className="second">
            <p className="text-6xl font-bold">{weatherData.name}</p>

            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Temperature: {weatherData.sys.country}</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
          <div className="third">
            <p>Latitude: {weatherData.coord.lat}</p>
            <p>Longtude: {weatherData.coord.lon}</p>
            <p>Speed of wind: {weatherData.wind.speed}m/s</p>
          </div>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
