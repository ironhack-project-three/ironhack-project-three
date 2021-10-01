import logo from './logo.svg';
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
import ErrorPage404 from './Pages/ErrorPage404';
import ErrorPage500 from './Pages/ErrorPage500';
import { Switch, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={UserProfile} />
        <Route path="/wines/:id" component={WineDetailsPage} />
        <Route path="/wines/map" component={WineMap} />
        <Route path="/wines" component={AllWines} />
        <Route path="/search" component={SearchWines} />
        <Route path='/About' component={AboutUs}/>
        <Route path='/404' component={ErrorPage404} />
        <Route path='/500' component ={ErrorPage500} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
