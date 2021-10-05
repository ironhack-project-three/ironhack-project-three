import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import AllWines from './Pages/AllWines';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Pages/UserProfile';
import SearchWines from './Pages/SearchWines';
import WineDetailsPage from './Pages/WineDetailsPage';
import WineMap from './Pages/WineMap';
import createWine from './Pages/createWine';
import ErrorPage404 from './Pages/ErrorPage404';
import ErrorPage500 from './Pages/ErrorPage500';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import 'bulma/css/bulma.min.css';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <header className="App-header">
            <NavBar />
          </header>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-10">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={UserLogin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/user" component={UserProfile} />
            <Route path="/create-wine" component={createWine} />
            <Route path="/winemap" component={WineMap} />
            <Route path="/wine/:wineid" component={WineDetailsPage} />
            <Route path="/all-wine" component={AllWines} />
            <Route path="/search" component={SearchWines} />
            <Route path="/about" component={AboutUs} />
            <Route path="/user/:userId" component={EditProfile} />
            <Route path="/404" component={ErrorPage404} />
            <Route path="/500" component={ErrorPage500} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
