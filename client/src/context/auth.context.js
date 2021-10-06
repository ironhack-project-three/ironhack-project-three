import React, { useState, useEffect } from "react";
import axios from "axios";
let baseURL =  "http://localhost:3000"
const AuthContext = React.createContext();
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  // const [storedTokenState, setStoredTokenState] = useState(null)
  // const logInUser = (token) => { 
  //   localStorage.setItem('authToken', token);           
  //}
  const verifyStoredToken = () => {                           
    const storedToken = localStorage.getItem('authToken');
    console.log("18 Stored token:", storedToken)
    // setStoredTokenState(storedToken)
  
    if (storedToken) {
      axios.get(
       "http://localhost:3000/users/verify",
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        console.log("Successfully verified JWT:", response)
        const user = response.data;
        setUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
       .catch(error => {
         console.log("storedToken 37", storedToken)
        console.log("line 38 Failed to verify JWT:", error)
         setIsLoggedIn(false);
         setUser(null);
         setIsLoading(false);
       });
     } else {
       setIsLoading(false);
     }
   }
  const logInUser = (token) => {
    localStorage.setItem('authToken', token);
    verifyStoredToken();
  };
  const logOutUser = () => {
    localStorage.removeItem("authToken");
//Update the state variables
      setIsLoggedIn(false);
      setUser(null);                                   
  }  
  useEffect(() => {    
    verifyStoredToken();                                 
  }, []);
  return (
    <AuthContext.Provider
    value={{ isLoggedIn, isLoading, user, logInUser, logOutUser }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export { AuthProviderWrapper, AuthContext };