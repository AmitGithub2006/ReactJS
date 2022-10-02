import React, { useState, useEffect } from "react";
import axios from "axios";

export function GitData() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{posts.name}</h1>
      <p>{posts.location}</p>
      <img src={posts.avatar_url} alt="" height="200px" width="200px" />
      <br />
      <a target="_blank" href={posts.html_url}>
        Click to check profile
      </a>
    </div>
  );
}
