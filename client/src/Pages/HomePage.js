import React from "react";
import "bulma/css/bulma.min.css";
import ImageCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AddWine from "../components/AddWine";
import EditProfile from "../components/EditProfile";

export default function HomePage() {
  return (
    <div>
      <img src="client\src\Images\Naamloos2.png" className="logoPosition" alt="logo" />
      <div className="Hero">
        <h1>Welcome to VineVibe</h1>
        <p>
          A virtual winecallar where you can keep all of the wines you have
          tried, have loved and all of the wines you want to try.
        </p>
        <p>
          “One should always be drunk. That's all that matters...But with what?
          With wine, with poetry, or with virtue, as you chose. But get drunk.”
          ― Charles Baudelaire
        </p>
      </div>
      <div>
        <h1>Wine of the month</h1>
        <div className="columns">
          <div className="column">White wine</div>
          <div className="column">Red wine</div>
          <div className="column">Rose</div>
        </div>
      </div>
      <ImageCarousel />
      <EditProfile />
    </div>
  );
}
