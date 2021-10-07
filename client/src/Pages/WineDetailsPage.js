import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Block, Columns } from "react-bulma-components";
import { Wines } from "../api/wines";
import { FaSpinner } from "react-icons/fa";
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import "./WineDetailsPage.css"

export default function WineDetailsPage(props) {
  console.log('wine details props',props);
  const [wine, setWine] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchWine(id) {
    const response = await new Wines().getOne(id);
 
    setWine(response.data);
    setLoading(false);
  }

  async function refreshWine(newWine){
    const response = await new Wines().getOne(newWine._id);
    setWine(response.data);
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
      <Columns className="is-centered">
        <Columns.Column className="is-narrow">
          <div className="wineDetailTitle is-size-1">
              {wine.title}
          </div>
        </Columns.Column>
      </Columns>
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
            <b>Average Price:</b> € {wine.price}
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
          <Block className="">
            <b>Add your own review:</b>
            <AddReview wineId={wine._id} refreshWine={refreshWine}/>
            <b>Reviews:</b> 
            <div>
              {wine.reviews.map( element =>  {
                return <ReviewCard review={element} refreshWine={refreshWine} wine={wine}/>
              })}
            </div>
          </Block>
        </Box>
      )}
    </div>
  );
}
