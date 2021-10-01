import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react';
//import { AuthContext } from "./../context/auth.context";

export default function UserLogin() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState(undefined);
      
        //const { logInUser } = useContext(AuthContext);
      
      
        const handleEmail = (e) => setEmail(e.target.value);
        const handlePassword = (e) => setPassword(e.target.value);
      
        
        const handleLoginSubmit = (e) => {
          e.preventDefault();
          const requestBody = { email, password };
      

    return (
        <section className="hero has-background-white-ter is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div column is-5-tablet is-4-desktop is-3-widescreen>
                            <form action="POST" className="box" onSubmit={handleLoginSubmit}>
                                <h3 className="title is-3">Login</h3>
                                <div className="field">
                                    <label for="" className="label">Email</label>
                                    <div className="control has-icons-left">
                                    <input type="email" name="email" placeholder="e.g. your_email@Vinevibe.com" className="input" value={email} onChange={handleEmail} required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label for="" className="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input type="password" name="password" placeholder="********" className="input" value={password} onChange={handlePassword} required></input>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    <div className='field'>
                                        <a href="">Forgot Password</a>
                                    </div>
                                    <div className="field">
                                        <button className="button is-warning is-rounded" type="submit">Login</button>
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
}
