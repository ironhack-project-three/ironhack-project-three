import React from "react";
import { useEffect, useState } from "react";

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
  });

  return (
    <div>
      <h1>AllWines</h1>
      {wines.map((wine) => {
        return <div>{wine.title}</div>;
      })}
    </div>
  );
}
