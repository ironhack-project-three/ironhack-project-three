import React from 'react';
import Tabs from '../components/Tabs';
import "../App.css";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

export default function UserProfile(props) {
    const {isLoggedIn, user} = useContext(AuthContext);
    console.log(isLoggedIn, user)
    return (
    <div>
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src="{}" alt="Profile"></img>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="is-2">
                        Welcome
                    </h1>
                    <h2 className="is-4">
                        Lorem ipsum 
                    </h2>
                    <p className="has-text-centered">
                        <a className="button is-warning is-rounded" href="/TODO">
                            Edit Profile
                        </a>
                        <a className="button is-warning is-rounded" href="/TODO">
                            Log out
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Tabs>
        <div label="Wines added">
        Wines added
        </div>
        <div label="Your cellar">
        Your cellar
        </div>
        <div label="Wines reviewed">
        Wines reviewed
        </div>
      </Tabs>
</div>
    )
}
