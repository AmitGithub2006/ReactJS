import React, { useState, useEffect } from "react";
import axios from "axios";

export function GitAPI() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [btnId, setBtnId] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(`https://api.github.com/users/${id}`).then(
      (response) => {
        console.log(response);
        setPosts(response.data);
      },
    );
  }, [btnId])

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setBtnId(id)}>click</button>
      <h1>{posts.name}</h1>
      <p>{posts.location}</p>
      <img src={posts.avatar_url} alt="" height="200px" width="200px"/><br />
      <a target="_blank" href={posts.html_url}>Click to check profile</a>
    </div>
  );
}