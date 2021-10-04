import React from "react";
import { useEffect, useState } from "react";
import  {Api}  from "../api/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ImageCarousel(props) {


  
  
  const [image, setImage] = useState([]);
  async function fetchImage() {
    const response = await new Api().getAll(props);
    
    console.log("this is the response", response);
    console.log("this is the response data", response.data);
    setImage(response.data);
  }

  useEffect(() => {
    fetchImage();
  }, []);

  console.log("line 22", image)

  return (
  
      
  <Carousel autoPlay>
  <div>
      <img src={image[0]} />

  </div>
  <div>
      <img src={image[1]} />

  </div>
  <div>
      <img src={image[3]} />
  </div>
  <div>
      <img src={image[7]} />
  </div>

</Carousel>
  

  );
}