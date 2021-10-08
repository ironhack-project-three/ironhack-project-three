import React from "react";
import { useContext, useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import { Box } from "react-bulma-components";
import {Users} from "../api/users"

import "../App.css";
import Tabs from "../components/Tabs";
import { AuthContext } from "../context/auth.context";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(user)
  const authToken = localStorage.getItem('authToken')
  async function fetchUser(id) {
    const response = await new Users().getOne(id, authToken );
    setUpdatedUser(response.data);
  }

  useEffect(()=> {
    fetchUser(user._id)
  }, [])

  return (
    <div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-6 is-offset-1">
              <h1 className="is-2">Hello, {user.username}!</h1>
              <h2 className="is-4">Welcome to your personal wine cellar</h2>
              <br></br>
              <p>
                Here, you can have a virtual tasting of all of the wines you
                have experienced, the wines that you have loved and the wines
                you still want to explore
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
          {updatedUser.Favorite.map((wine) => {
            return (
              <Link key={wine._id} to={() => `/wine/${wine._id}`}>
                <Box className="is-size-3">{wine.title}</Box>
              </Link>
            );
          })}
        </div>
        <div label="Tried ✓">
          All the wines that you did try. Don&apos;t forget to leave your personal
          review!
          {updatedUser.TriedInThePast.map((wine) => {
            return (
              <Link key={wine._id} to={() => `/wine/${wine._id}`}>
                <Box className="is-size-3">{wine.title}</Box>
              </Link>
            );
          })}
        </div>
        <div label="Want to try ★">
          You don&apos;t want to miss out of those one!
          {updatedUser.WantToTry.map((wine) => {
            return (
              <Link key={wine._id} to={() => `/wine/${wine._id}`}>
                <Box className="is-size-3">{wine.title}</Box>
              </Link>
            );
          })}
        </div>
        <div label="Wines added ✎">
          Wines that have been added to our database by you.
        </div>
      </Tabs>
    </div>
  );
}
