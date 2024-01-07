import React, { useState, useEffect } from "react";
const appid = "b4ec2168bc9a991595d49a3b361958a0";
const city = "adama";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Assuming data is an array of items
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const leng = data.length;
  return (
    <div>
      <h2>Displaying Data</h2>
      <p className="text-red-400">{data.length}</p>
      {leng === 0 ? (
        <p className="text-red-400">Loading the data</p>
      ) : (
        <p>{JSON.stringify(data.weather[0].icon)}</p>
      )}
    </div>
  );
};

export default Data;
