import React from "react";
import { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import ImageCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Wines } from "../api/wines";
import { Box } from "react-bulma-components";
import Namloos2 from "../Images/Naamloos2.png";
import "./WineDetailsPage.css";
import ErrorBoundary from "../components/ErrorBoundary";

// import { useLoading } from 'react-use-loading';
// import LoadingPageAnimation from './components/LoadingPageAnimation';

export default function HomePage() {
  // const MyComponent = () => {
  //   const [{ isLoading }] = useLoading(true);
  // }
  const [wines, setWines] = useState([]);
  async function fetchWines() {
    const response = await new Wines().topWines();
    // console.log("this is the response", response);
    // console.log("this is the response data", response.data.winesTop);
    setWines(response.data.winesTop.slice(0, 1));
  }

  useEffect(() => {
    fetchWines();
  }, []);

  return (
    // <div>
    //   isLoading ? <LoadingPageAnimation /> :
    <div>
      <img src={Namloos2} className="logoPosition" alt="logo" />
      <br></br>
      <p>
        “One should always be drunk. That’s all that matters...But with what?
        With wine, with poetry, or with virtue, as you chose. But get drunk.” ―
        Charles Baudelaire
      </p>
      <br></br>
      <div className="Hero">
        <ErrorBoundary>
          <ImageCarousel />
        </ErrorBoundary>
      </div>
      <br></br>
      <div>
        <br></br>
        <h2 className="is-size-1">Wine of the month:</h2>
        <ErrorBoundary>
        {wines.map((wine) => {
          return (
            <Link key={wine._id} to={() => `/wine/${wine._id}`}>
              <Box className="is-size-3">{wine.title}</Box>
            </Link>
          );
        })}
        </ErrorBoundary>
      </div>
    </div>
    // </div>
  );
}
