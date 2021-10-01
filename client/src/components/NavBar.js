import { Link } from "react-router-dom";



export default function NavBar() {





    return (

       

        <div className="NavBar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/wines'>Discover wines</Link>
                    <Link to='/WineMap'>Wine map</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/AboutUs'>About Us</Link>
                    <Link to='/SignUp'>Sign Up</Link>
                    <Link to='/UserLogin'>Log in</Link>
                </li>
            </ul>

            

        <div class="spacer layer1"></div>
        </div>

    )
}
