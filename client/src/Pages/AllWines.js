import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "react-bulma-components";
import { Wines } from "../api/wines";

export default function AllWines(props) {
  const [wines, setWines] = useState([]);
  async function fetchWines() {
    const response = await new Wines().getAll();
    console.log("this is the response", response);
    console.log("this is the response data", response.data.wines);
    setWines(response.data.wines);
  }

  useEffect(() => {
    fetchWines();
  }, []);

  return (
    <div>
      <h1 className="is-size-1">All Wines</h1>
      {wines.map((wine) => {
        return <Link to={() => `/wine/${wine._id}`}><Box className="is-size-3">{wine.title}</Box></Link>;
      })}
    </div>
  );
}
