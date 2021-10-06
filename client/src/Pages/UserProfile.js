import React from "react";
import "../App.css";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import Tabs from "../components/Tabs";


export default function UserProfile() {
    const {isLoggedIn, user} = useContext(AuthContext);
    console.log(isLoggedIn, user)

    return (
    <div>
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-centered">
                <div className="column is-6 is-offset-1">
                    <h1 className="is-2">
                        Welcome
                    </h1>
                    <p>
                        Welcome to your personal wine cellar
                    </p>
                    <br></br>
                    <h2 className="is-4">
                    Here, you can have a virtual tasting of all of the wines you have experienced, the wines that you have loved and the wines you still want to explore
                    </h2>
                    {/* <p className="has-text-centered">
                        <motion.button className="button is-warning" href="/">
                            Edit Profile
                        </motion.button>
                    </p> */}
                </div>
            </div>
        </div>
    </div>
    <Tabs>
        <div label="Loved">   
        Loved
        </div>
        <div label="Tried">
        Tried
        </div>
        <div label="Want to try">
        Want to try
        </div>
        <div label="Wines added">
        Wines added
        </div>
      </Tabs>
</div>
    )
}
