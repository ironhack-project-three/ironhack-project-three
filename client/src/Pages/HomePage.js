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
