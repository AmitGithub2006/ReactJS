import React, { useState } from "react";
const axios = require("axios").default;

const GitAPI = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  async function getWeatherData(userName) {
    try {
      const response = await axios.get(
        "https://api.github.com/users/AmitGithub2006",
        {
          params: {
            // key: "aa2efebe1c7b459a96e173040222809",
            q: `${userName}`,
            // aqi: "no",
          },
        }
      );
      console.log(response);
      setWeatherData(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    getWeatherData(city);
  };

  return (
    <>
      <input
        placeholder="City Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Fetch</button>
      {weatherData.location ? (
        <>
        <p>Name : {weatherData.name}</p>
        <p>User : {weatherData.login}</p>
        </>
      ) : (
        <p>Please enter city name.</p>
      )}
    </>
  );
};

export default GitAPI;
