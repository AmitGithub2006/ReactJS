import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Api() {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        console.log(response);
        setPosts([posts, ...response.data]);
        setFilteredData([posts, ...response.data]);
    })
  }, [])

  useEffect(() => {
    const afterFilterData = posts.filter((post) => {
        if(post.name) {
            return post.name.includes(search.toLowerCase())
        }
    })
    setFilteredData(afterFilterData);
  },[search])

  return (
    <div>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        {filteredData.map((post) => (
            <div key={post.id}>
                <h1>{post.name}</h1>
            </div>
        ))}
    </div>
  )
}

// =============================================================================================================
// With button click

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export function Api() {
//   const [posts, setPosts] = useState([]);
//   const [id, setId] = useState(1);
//   const [btnId, setBtnId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
//       .then((response) => {
//         console.log(response.data);
//         setPosts(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, [btnId]);

//   return (
//     <div>
//       <h1>{posts.title}</h1>
//       <p>{posts.body}</p>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <button onClick={() => setBtnId(id)}>click</button>
//     </div>
//   );
// }