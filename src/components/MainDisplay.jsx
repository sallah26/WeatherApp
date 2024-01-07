import React from "react";
import { WiDayWindy } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { WiMeteor } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiLightning } from "react-icons/wi";
import { TbWorldLongitude } from "react-icons/tb";
import { WiHurricaneWarning } from "react-icons/wi";

const MainDisplay = ({ weatherData, city }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  return (
    <div className="">
      {weatherData && (
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-6">
          <div className="first min-w-56 md:mt-16">
            <p className="flex  gap-0.5 ">
              <WiMeteor size={33} />
              Pressure: {weatherData.main.pressure}hPa
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiHumidity size={33} />
              Humidity: {weatherData.main.humidity}%
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiHumidity size={33} />
              Like: {weatherData.main.feels_like}
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiHumidity size={33} />
              Cloudness: {weatherData.clouds.all}%
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiHumidity size={33} />
              Rain: {weatherData.rain}
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiHumidity size={33} />
              Snow: {weatherData.snow}
            </p>

            <p className="flex mt-1.5  gap-0.5 ">
              <WiLightning size={33} />
              Max-Temperature: {(300 - weatherData.main.temp_max).toFixed(1)}°C
            </p>
            <p className="flex mt-1.5  gap-0.5 ">
              <WiBarometer size={33} />
              Min-Temperature: {(300 - weatherData.main.temp_min).toFixed(1)}°C
            </p>
          </div>
          <div className="second col-start-2 col-span-4 flex flex-col justify-center items-center">
            <div className="relative">
              <img src={iconUrl} className="-mb-14" alt="icon" width={350} />
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold">{weatherData.name}</p>
              <p>{weatherData.weather[0].description}</p>
              <p className="flex justify-center text-4xl font-mono">
                <CiTempHigh size={48} />
                {(300 - weatherData.main.temp).toFixed(1)}°C
              </p>
            </div>
          </div>
          <div className="third min-w-56 gap-4  md:mt-16">
            <p className="flex gap-0.5  ">
              <WiHurricaneWarning size={33} /> Latitude: {weatherData.coord.lat}
            </p>
            <p className="flex gap-1  mt-1.5 ">
              <TbWorldLongitude size={27} /> Longtude: {weatherData.coord.lon}
            </p>
            <p className="flex gap-1  mt-1.5">
              <WiDayWindy size={30} /> Speed of wind: {weatherData.wind.speed}
              m/s
            </p>
            <p className="flex gap-1  mt-1.5">
              <WiDayWindy size={30} /> Sunrise: {weatherData.sys.sunrise}UTC
            </p>
            <p className="flex gap-1  mt-1.5">
              <WiDayWindy size={30} /> Sunset: {weatherData.sys.sunset}UTC
            </p>
          </div>
          {/* Add more weather details as needed */}
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
