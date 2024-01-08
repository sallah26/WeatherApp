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
          <div className="first flex flex-col gap-3 justify-center min-w-56">
            <p className="flex items-center  gap-0.5 ">
              <WiMeteor size={33} />
              Pressure: {weatherData.main.pressure}hPa
            </p>
            <p className="flex items-center  gap-0.5 ">
              <WiHumidity size={33} />
              Humidity: {weatherData.main.humidity}%
            </p>
            <p className="flex items-center  gap-1 ">
              <FaCloud size={27} />
              Cloudness: {weatherData.clouds.all}%
            </p>
            {/* <p className="flex items-center  gap-1 ">
              <LuCloudRainWind size={28} />
              Rain: Null
            </p>
            <p className="flex items-center  gap-1 ">
              <CiCloudRainbow size={28} />
              Snow: Null
            </p> */}
            <p className="flex items-center gap-1 ">
              <WiDayWindy size={30} /> Speed of wind: {weatherData.wind.speed}
              m/s
            </p>
            <p className="flex items-center gap-1 ">
              <WiDayWindy size={30} />
              Wind Direction: {weatherData.wind.deg}°
            </p>
            <p className="flex items-center  gap-0.5 ">
              <WiLightning size={33} />
              Max-Temperature: {(300 - weatherData.main.temp_max).toFixed(1)}°C
            </p>
            <p className="flex items-center  gap-0.5 ">
              <WiBarometer size={33} />
              Min-Temperature: {(300 - weatherData.main.temp_min).toFixed(1)}°C
            </p>
          </div>
          <div className="second col-start-2 col-span-4 flex flex-col justify-center items-center">
            <div className="relative">
              <FaCloud size={250} className="-mb-1" />
              {/* <img src={iconUrl} className="-mb-14" alt="icon" width={350} /> */}
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold">{weatherData.name}</p>
              <p className="mt-1">The condition is like {weatherData.weather[0].description}</p>
              <p className="flex mt-1 justify-center text-4xl font-mono">
                <CiTempHigh size={48} />
                {(300 - weatherData.main.temp).toFixed(1)}°C
              </p>
            </div>
          </div>
          <div className="third min-w-72 flex flex-col justify-center gap-3 md:-ml-6 ">
            <p className="flex items-center gap-0.5  ">
              <WiHurricaneWarning size={33} /> Latitude: {weatherData.coord.lat}
            </p>
            <p className="flex gap-1  items-center">
              <TbWorldLongitude size={25} /> Longtude: {weatherData.coord.lon}
            </p>
            <p className="flex items-center gap-1  ">
              <SiOpensearch size={25} /> Sea level: {weatherData.main.sea_level}
              hPa
            </p>
            {/* <p className="flex items-center gap-1  "> 
              <SiOpensearch size={25} />
              visibility: {weatherData.visibility / 1000}km
            </p>

            <p className="flex items-center gap-1  ">
              <SiOpensearch size={25} /> Ground level:{" "}
              {weatherData.main.grnd_level}
              hPa
            </p> */}
            <p className="flex items-center gap-1 ">
              <FiSunrise size={25} /> Sunrise: {localSunriseString}
            </p>
            <p className="flex items-center gap-1 ">
              <FiSunset size={25} /> Sunset: {localSunsetString}
            </p>
            <p className="flex items-center gap-1 ">
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
