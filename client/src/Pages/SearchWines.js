import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "react-bulma-components";

import  {Wines}  from "../api/wines";

export default function SearchWines(props) {
 
  const [wines, setWines] = useState([]);
  let filteredWines = wines

  const [query, setQuery] = useState('');
  if (query !== "") {
    filteredWines = wines.filter((wine) => {
      return wine.title.toLowerCase().includes(query.toLowerCase());
    });
  }
  const changeHandler = event => {
    setQuery(event.target.value);
  };

  async function fetchWines() {
    const response = await new Wines().search(query);
    console.log("this is the response", response);
    console.log("this is the response data", response.data.wines);
    setWines(response.data.wines);
  }

  useEffect(() => {
    fetchWines();
  },[]);

  return (
    <div>
      <h1 className="title is-size-1">SearchWines</h1>
      <input 
        onChange={changeHandler} 
        type="text" 
        placeholder="Type a query..."
      />
      {filteredWines.map((wine) => {
        return <Link to={() => `/wines/${wine._id}`}><Box className="title is-size-3">{wine.title}</Box></Link>;
      })}
    </div>
  );
}
