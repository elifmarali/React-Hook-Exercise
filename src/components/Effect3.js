//useEffect kullanarak internetten veri getirme (data fetch)
import React, { useEffect, useState } from "react";
import axios from "axios";
function Effect3() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("covid19");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(data.hits);
    };
    fetchData();
  }, [query]);
  return (
    <div>
      <h1>Effect 3</h1>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {hits.map((hit) => (
          <li key={hits.objectId} style={{ listStyle: "none" }}>
            {hit.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Effect3;
