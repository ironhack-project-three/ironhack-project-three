import React, { useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { AuthContext } from "../context/auth.context";
import { motion } from "framer-motion"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { isLoggedIn, user, logOutUser  } = useContext(AuthContext);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar1">
        {isLoggedIn
        ? (<>
            <motion.button
            id = "logbutton"
            className = "button is-normal"
            whileHover = {{ scale: 1.1}}
            whileTap = {{ scale: 0.9}}
            onClick={logOutUser}
            >Logout</motion.button>
          </>)
        :
        (<>
          <Link to="/signup"> <motion.button
          id = "logbutton"
          className = "button is-normal"
          whileHover = {{ scale: 1.1}}
          whileTap = {{ scale: 0.9}}
          >Signup</motion.button> </Link>
          <Link to="/login"> <motion.button
          id = "logbutton"
          className = "button is-normal"
          whileHover = {{ scale: 1.1}}
          whileTap = {{ scale: 0.9}}
          >Login</motion.button> </Link>
        </>)
      }
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
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
