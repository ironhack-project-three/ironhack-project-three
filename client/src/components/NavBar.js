import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "../context/auth.context";    // <== IMPORT

export default function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

    return (
        <div className="NavBar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/wines'>Discover wines</Link>
                    <Link to='/WineMap'>Wine map</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/AboutUs'>About Us</Link>
                    {isLoggedIn
                    ? (<>
                    <Link to="/mywinecellar">My Winecellar</Link>
                    <button onClick={logOutUser}>Logout</button>
                    <span>{user.name}</span>
                    </>)
                    :
                    (<>
                    <Link to='/UserLogin'>Log in</Link>
                    <Link to='/SignUp'>Sign Up</Link>
                    </>)
                    }
                </li>
            </ul>
        </div>
    )
}
