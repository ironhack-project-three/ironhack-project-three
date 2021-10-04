import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Block, Box } from "react-bulma-components";
import { Wines } from "../api/wines";
import { FaSpinner } from "react-icons/fa";

export default function WineDetailsPage(props) {
  console.log(props);
  const [wine, setWine] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchWine(id) {
    const response = await new Wines().getOne(id);
    console.log("this is the response", response);
    console.log("this is the response data", response.data);
    setWine(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchWine(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <Block>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to={() => "/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={() => "/wines"}>
                All Wines
              </Link>
            </li>
            <li className="is-active">
              <Link to={() => `/wines/${wine._id}`}>{wine.title}</Link>
            </li>
          </ul>
        </nav>
      </Block>
      <Box className="is-size-1">{wine.title}</Box>
      {loading ? (
        <div style={{ fontSize: "128px" }}>
          <FaSpinner className="fa-spin" />
        </div>
      ) : (
        <Box>
          <Block className="">
            <b>Description:</b> {wine.description}
          </Block>
          <Block className="">
            <b>Price Range:</b> $ {wine.price} (RRP)
          </Block>
          <Block className="">
            <b>Variety:</b> {wine.variety}
          </Block>
          <Block className="">
            <b>Region:</b> {wine.region_1}
          </Block>
          <Block className="">
            <b>Province:</b> {wine.province}
          </Block>
          <Block className="">
            <b>Country:</b> {wine.country}
          </Block>
          <Block className="">
            <b>Winery:</b> {wine.winery}
          </Block>
        </Box>
      )}
    </div>
  );
}
