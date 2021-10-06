import NavBar from './components/NavBar';
import './App.css';
import AllWines from './Pages/AllWines';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Pages/UserProfile';
import SearchWines from './Pages/SearchWines';
import WineDetailsPage from './Pages/WineDetailsPage';
import createWine from './Pages/createWine';
import WineMap from './Pages/WineMap';
import ErrorPage404 from './Pages/ErrorPage404';
import ErrorPage500 from './Pages/ErrorPage500';
import { Switch, Route } from 'react-router-dom';
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
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/user" component={UserProfile} />
            <Route exact path="/create-wine" component={createWine} />
            <Route exact path="/winemap" component={WineMap} />
            <Route exact path="/wine/:id" component={WineDetailsPage} />
            <Route exact path="/search" component={SearchWines} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/user/:userId" component={EditProfile} />
            <Route exact path="/404" component={ErrorPage404} />
            <Route exact path="/500" component={ErrorPage500} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
