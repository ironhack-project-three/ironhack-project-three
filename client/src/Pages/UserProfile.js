import React from "react";
import "../App.css";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth.context';
import Tabs from "../components/Tabs";
import  {Users}  from "../api/users";
   
export default function UserProfile() {
    const {isLoggedIn, user } = useContext(AuthContext);
    const storedToken = localStorage.getItem('authToken');
   

  useEffect(()=>{
     new Users().getOne(user._id, storedToken)
      .then(userProfile => {
          //this is the favourties that you want to renderVVV
          // there is a route to also add new favourites
          console.log("15 user ", userProfile.data.Favorite)
      })
      .catch((err)=> {console.log("line 17 ", err)})
  },[]
  )



    return (
    <div>
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-centered">
                <div className="column is-6 is-offset-1">
                    <h1 className="is-2">
                        Welcome
                    </h1>
                    <h2 className="is-4">
                        Welcome to your personal wine cellar
                    </h2>
                    <br></br>
                    <p>
                    Here, you can have a virtual tasting of all of the wines you have experienced, the wines that you have loved and the wines you still want to explore
                    </p>
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
        <div label="Loved ♥︎">   
        Find your personal collection of your favorite wines.

        <p></p>
        </div>
        <div label="Tried ✓">
        All the wines that you did try. Don't forget to leave your personal review! 
        </div>
        <div label="Want to try ★">
        You don't want to miss out of those one! 
        </div>
        <div label="Wines added ✎">
        Wines that have been added to our database by you.
        </div>
      </Tabs>
</div>
    )
}
