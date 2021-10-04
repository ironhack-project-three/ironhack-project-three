import React from "react";
import { useEffect, useState } from "react";
import { Box } from "react-bulma-components";
import { Wines } from "../api/wines";

export default function WineDetailsPage(props) {
  const [wine, setWine] = useState({});
  async function fetchWine() {
    const response = await new Wines().getOne(props.match.params.id);
    console.log("this is the response", response);
    console.log("this is the response data", response.data);
    setWine(response.data);
  }

  useEffect(() => {
    fetchWine();
  }, [props.match.params.id]);

  return (
    <div>
      <h1 className="title is-size-1">WineDetailsPage</h1>
        <Box className="title is-size-3">{wine.title}</Box>
        <Box className="title is-size-3">{wine.description}</Box>
        <Box className="title is-size-3">{wine.pricing}</Box>
        <Box className="title is-size-3">{wine.variety}</Box>
        <Box className="title is-size-3">{wine.region_1}</Box>
        <Box className="title is-size-3">{wine.province}</Box>
        <Box className="title is-size-3">{wine.country}</Box>
        <Box className="title is-size-3">{wine.winery}</Box>
        <img src="https://www.placecage.com/500/500" />
    </div>
  );
}
