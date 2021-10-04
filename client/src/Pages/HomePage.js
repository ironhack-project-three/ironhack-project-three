import React from 'react';
import 'bulma/css/bulma.min.css';
import ImageCarousel from '../components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AddWine from "../components/AddWine";

export default function HomePage() {
    return (
    <div>
      <div className="Hero">
        <h1>Welcome to </h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div>
        <h1>Wine of the month</h1>
        <div class="columns">
          <div class="column">
            White wine
          </div>
          <div class="column">
            Red wine
          </div>
          <div class="column">
            Rose
          </div>
        </div>
      </div>
      <ImageCarousel />
      <AddWine />
    </div>
    )
}
