import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Wine",
    path: "/create-wine",
    icon: <BsIcons.BsPlusCircleFill />,
    cName: "nav-text",
  },
  {
    title: "Search Wines",
    path: "/search",
    icon: <FaIcons.FaSearch />,
    cName: "nav-text",
  },
  {
    title: "Your Wine Cellar",
    path: "/user",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
