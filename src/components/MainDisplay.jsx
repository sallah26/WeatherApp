import React from "react";
import { WiDayWindy } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { WiMeteor } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiLightning } from "react-icons/wi";
import { TbWorldLongitude } from "react-icons/tb";
import { WiHurricaneWarning } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
import { LuCloudRainWind } from "react-icons/lu";
import { CiCloudRainbow } from "react-icons/ci";
import { SiOpensearch } from "react-icons/si";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

const MainDisplay = ({ weatherData, city }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  let dataCompilation = weatherData.dt; //Time of this data been compiled
  let sunriseUnixTimestamp = weatherData.sys.sunrise; //Sunrise: 1704685350UTC
  let sunsetUnixTimestamp = weatherData.sys.sunset; // Sunset: 1704727191UTC
  // Convert UNIX timestamps to milliseconds
  let dataCompiled = new Date(dataCompilation * 1000);
  let sunriseDate = new Date(sunriseUnixTimestamp * 1000);
  let sunsetDate = new Date(sunsetUnixTimestamp * 1000);

  // Assuming a time zone offset for Ethiopian time (in minutes)
  let timeZoneOffsetInMinutes = +180; // Ethiopia Standard Time (EAT) UTC+3

  // Apply the time zone offset to the dates
  let dataCompiledAt = new Date(
    dataCompiled.getTime() + timeZoneOffsetInMinutes * 60000
  );

  let localSunrise = new Date(
    sunriseDate.getTime() + timeZoneOffsetInMinutes * 60000
  );
  let localSunset = new Date(
    sunsetDate.getTime() + timeZoneOffsetInMinutes * 60000
  );

  // Convert the local times to readable strings
  let dataCompiledTime = dataCompiledAt.toLocaleString();
  let localSunriseString = localSunrise.toLocaleString();
  let localSunsetString = localSunset.toLocaleString();

  return (
    <div className="">
      {weatherData && (
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-6">
          <div className="first min-w-56 md:mt-16">
            <p className="flex  gap-0.5 ">
              <WiMeteor size={33} />
              Pressure: {weatherData.main.pressure}hPa
            </p>
            <p className="flex mt-2  gap-0.5 ">
              <WiHumidity size={33} />
              Humidity: {weatherData.main.humidity}%
            </p>
            <p className="flex mt-2  gap-1 ">
              <FaCloud size={27} />
              Cloudness: {weatherData.clouds.all}%
            </p>
            <p className="flex mt-2  gap-1 ">
              <LuCloudRainWind size={28} />
              Rain: Null
            </p>
            <p className="flex mt-2  gap-1 ">
              <CiCloudRainbow size={28} />
              Snow: Null
            </p>
            <p className="flex mt-2  gap-0.5 ">
              <WiLightning size={33} />
              Max-Temperature: {(300 - weatherData.main.temp_max).toFixed(1)}°C
            </p>
            <p className="flex mt-2  gap-0.5 ">
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
          <div className="third min-w-72 gap-4 md:-ml-6  md:mt-1">
            <p className="flex gap-0.5  ">
              <WiHurricaneWarning size={33} /> Latitude: {weatherData.coord.lat}
            </p>
            <p className="flex gap-1  mt-2 ">
              <TbWorldLongitude size={27} /> Longtude: {weatherData.coord.lon}
            </p>
            <p className="flex gap-1  mt-2 ">
              <SiOpensearch size={27} /> Sea level: {weatherData.main.sea_level}
              hPa
            </p>
            <p className="flex gap-1  mt-2">
              <WiDayWindy size={30} /> Speed of wind: {weatherData.wind.speed}
              m/s
            </p>
            <p className="flex gap-1  mt-2 gpp  also">
              <FiSunrise size={27} /> Sunrise: {localSunriseString}
            </p>
            <p className="flex gap-1  mt-2 gpp">
              <FiSunset size={27} /> Sunset: {localSunsetString}
            </p>
            <p className="flex gap-1  mt-2 gpp">
              <MdOutlineCollectionsBookmark size={27} /> Data compiled At:{" "}
              {dataCompiledTime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDisplay;
