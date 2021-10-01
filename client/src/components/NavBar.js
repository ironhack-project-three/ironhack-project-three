<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar1'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
>>>>>>> 8d0292db0f595f3a6c6350283691bb04f28074c3
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;