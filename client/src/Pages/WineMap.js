import React from 'react'
import { Wines } from "../api/wines";
import { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

export default function AllWines(props) {
    const [wines, setWines] = useState([]);
    async function fetchWines() {
      const response = await new Wines().getAll();
      setWines(response.data.wines);
    }
  
    useEffect(() => {
      fetchWines();
    }, [wines]);
  
    return (
      <div>
        <h1 className="title is-size-1">Wine Map</h1>
        {wines.map((wine) => {
          return <Link to={() => `/wines/${wine._id}`}><Box className="title is-size-3">{wine.title}</Box></Link>;
        })}
      </div>
    );
  }
