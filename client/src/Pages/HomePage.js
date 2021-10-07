import React from "react";
import { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import ImageCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Wines } from "../api/wines";
import { Box } from "react-bulma-components";
import Namloos2 from "../Images/Naamloos2.png"

export default function HomePage() {

  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }




  const [wines, setWines] = useState([]);
  async function fetchWines() {
    const response = await new Wines().topWines();
    // console.log("this is the response", response);
    // console.log("this is the response data", response.data.winesTop);
    setWines(response.data.winesTop);
  }

  useEffect(() => {
    fetchWines();
   
  }, []);


    return (
    <div>

      <img src={Namloos2} className="logoPosition" alt="logo" />
      <div className="Hero">
      <ImageCarousel />
        <h1>Welcome to VineVibe</h1>
        <h2>Your virtual wine cellar</h2>
        <p>“One should always be drunk. That’s all that matters...But with what? With wine, with poetry, or with virtue, as you chose. But get drunk.” ― Charles Baudelaire</p>
      </div>
      <br></br>
      <div>
      <h2 className="is-size-1">Wines of the month</h2>
      {wines.map((wine) => {
        return <Link to={() => `/wine/${wine._id}`}><Box className="is-size-3">{wine.title}</Box></Link>;
      })}
      </div>
    </div>
  );
}
