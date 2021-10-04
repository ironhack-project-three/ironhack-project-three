import React from 'react';
import { Link } from "react-router-dom";
import {useState} from 'react';
import axios from "axios";

const API_URL = "http://localhost:3000";
// const frontUrl = "http://localhost:5000"

export default function SignUp(props) {
        const [email, setEmail] = useState("");
        const [errorMessage, setErrorMessage] = useState(undefined);
        const [password, setPassword] = useState("");
        const [username, setUserName] = useState("");
       // const [errorMessage, setErrorMessage] = useState(undefined);
      
        
        const handleEmail = (e) => setEmail(e.target.value);
        const handlePassword = (e) => setPassword(e.target.value);
        const handleUserName = (e) => setUserName(e.target.value);
        const handleSignupSubmit = (e) => {
          e.preventDefault();
          // Create an object representing the request body
          const requestBody = {username, email, password};
          const storedToken = localStorage.getItem('authToken');
      
          // Make an axios request to the API
          // If POST request is successful redirect to login page
          // If the request resolves with an error, set the error message in the state
          axios.post(`${API_URL}/users/create-user`, requestBody, 
        { headers: { Authorization: `Bearer ${storedToken}`}})
            .then((response) => {
                props.history.push(`/UserLogin`)
            })
            
            .catch((error) => {
                console.log("line 31",error.response);
             const errorDescription = error.response.data.message;
              setErrorMessage(errorDescription);
            })
        };
      
    return (
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="/users/create-user" method="POST" className="box" onSubmit={handleSignupSubmit}>
                                <h3 className="is-3">Sign up</h3>
                                <div className="field" style={{fontSize: "12px"}}>
                                    {errorMessage}
                                </div>
                                <div className="field">
                                    <label for="username" className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input  type="username" placeholder="e.g. VineVibe" className="input" value={username} onChange={handleUserName} required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="email" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input for="email" type="email" placeholder="e.g. your_email@VineVibe.com" className="input" value={email} onChange={handleEmail} required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="password" type="password" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="********" className="input" value={password} onChange={handlePassword} required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <div className='field' style={{fontSize: "12px"}}>
                                        <Link to={"/Userlogin"}>Already have an account? Click here to login</Link>
                                    </div>
                                    <div className="field">
                                        <button type="submit" className="button is-warning is-rounded">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}