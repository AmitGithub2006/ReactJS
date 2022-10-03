import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Covid.css";

export function Covid() {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });

  useEffect(() => {
    async function getCovidData() {
      const result = await axios.get(`https://data.covid19india.org/data.json`);
      console.log(result.data);
      setPosts(result.data.statewise);
      setFilteredData(result.data.statewise);
    }
    getCovidData();
  }, []);

  useEffect(() => {
    const afterFilterData = posts.filter((post) => {
      if (post.state) {
        return post.state.includes(search);
      }
    });
    setFilteredData(afterFilterData);
  }, [search]);

  const themeChange = () => {
    if(theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      })
    } else {
      setTheme({
        color: "black",
        backgroundColor: "white",
      })
    }
  }

  return (
    <div className="container" style={theme}>
      <div className="heading">
        <i className="fa-solid fa-virus-covid covidIcon"></i>
        <h1>CORONA VIRUS UPDATE</h1>
      </div>
      <input
        id="input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Your State..."
      />
      <button className="switchBtn" onClick={themeChange}>Switch Theme</button>
      <div className="details">
        {filteredData.map((post) => (
          <div className="main">
            <div className="individual">
              <h2 className="state head">{post.state}</h2>
              <h3 className="head">Active:{post.active}</h3>
              <h3 className="head">Confirmed:{post.confirmed}</h3>
              <h3 className="head">Deaths:{post.deaths}</h3>
              <h3 className="head">Recovered:{post.recovered}</h3>
              <h3 className="head">Updated On:{post.lastupdatedtime}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
