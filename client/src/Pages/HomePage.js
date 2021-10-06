import React from "react";
import "bulma/css/bulma.min.css";
import ImageCarousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
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
      <img src="client\src\Images\Naamloos2.png" className="logoPosition" alt="logo" />
      <div className="Hero">
      <ImageCarousel />
        <h1>Welcome to </h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div>
      <h1 className="is-size-1">Wine's of the Month</h1>
      {wines.map((wine) => {
        return <Link to={() => `/wine/${wine._id}`}><Box className="is-size-3">{wine.title}</Box></Link>;
      })}
      </div>
    </div>
  );
}
