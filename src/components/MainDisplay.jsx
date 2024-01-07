import React from "react";

const MainDisplay = ({ weatherData, city }) => {
  return (
    <div className="lg:absolute">
      {weatherData && (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="first"></div>
          <div className="second">
            <p className="text-6xl font-bold">{weatherData.name}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
          <div className="third"></div>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
