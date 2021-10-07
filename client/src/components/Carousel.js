import React from "react";
import { useEffect, useState } from "react";
import  {Api}  from "../api/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import ladyWithRose from "../Images/ladyWithRose.jpg"
import glassesOfRedAndRose from "../Images/glassesOfRedAndRose.jpg"
import rosePour from "../Images/rosePour.jpg"
import wineLemons from "../Images/wineLemons.jpg"
import winePeaches from "../Images/winePeaches.jpg"

export default function ImageCarousel(props) {

  const [image, setImage] = useState([]);
  async function fetchImage() {
    const response = await new Api().getAll();
    
    console.log("this is the response", response);
    console.log("this is the response data", response.data);
    setImage(response.data);
  }

  useEffect(() => {
    fetchImage();
  }, []);

  console.log("line 22", image)

  return (
   
<Carousel className="Carousel" autoPlay infiniteLoop width={"100%"} showThumbs={false}>
  <div>
      <img alt="wine" src={ladyWithRose} />
  </div>
  <div>
      <img alt="wine2" src={winePeaches} />
  </div>
  <div>
      <img alt="wine3" src={glassesOfRedAndRose} />
  </div> 
  <div>
      <img alt="wine4" src={rosePour} />
  </div>
  <div>
      <img alt="wine5" src={wineLemons} />
  </div>
</Carousel>
  

  );
}