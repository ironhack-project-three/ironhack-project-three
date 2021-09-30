import logo from './logo.svg';
import './App.css';
import AllWines from './Pages/AllWines';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import UserLogin from './Pages/UserLogin';
import UserProfile from './Pages/UserProfile';
import WineDetailsPage from './Pages/WineDetailsPage'
import WineMap from './Pages/WineMap'
import ErrorPage404 from './Pages/ErrorPage404';
import ErrorPage505 from './Pages/ErrorPage505';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project 3 <code>template</code> Globtrotters
        </p>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user" component={UserProfile} />
        <Route path="/wines/:id" component={WineDetailsPage} />
        <Route path="/wines/map" component={WineMap} />
        <Route path="/wines" component={AllWines} />
        <Route path='/404' component={ErrorPage404} />
        <Route path='/505' component ={ErrorPage505} />
      </Switch>
        

        
      </header>
    </div>
  );
}

export default App;
