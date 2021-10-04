// src/context/auth.context.js

import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:3000";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const verifyStoredToken = () => {                           
  
    const storedToken = localStorage.getItem('authToken');
    console.log("Stored token:", storedToken)
    if (storedToken) {
      axios.get(
        `${API_URL}users/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        console.log("Successfully verified JWT:", response)
        const user = response.data;
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Failed to verify JWT:", error.response)
        setIsLoggedIn(false);
        setUser(null);
        setIsLoading(false);
      });      
    } else {
      setIsLoading(false);
    } 
  }
 
    useEffect(() => {    
      verifyStoredToken();                                 
  }, []);
  
  const logInUser = (token) => {                              
    localStorage.setItem('authToken', token);
    verifyStoredToken();  
  }

  const logOutUser = () => {                                    
    localStorage.removeItem("authToken");
    
    // Update the state variables
    setIsLoggedIn(false);
    setUser(null);                                   
    props.history.push('/');
  }  

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, logInUser, logOutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
