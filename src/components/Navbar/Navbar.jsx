import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { FiHeadphones } from "react-icons/fi";
import { BiCog } from "react-icons/bi";

const Navbar = (props) => {
   return (
      <div className={classes.nav}>
         <nav>
            <div>
               <NavLink
                  to="/Profile"
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  Profile
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/Dialogs"
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  Massages
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/News"
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  News
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/Music" 
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  Music <FiHeadphones />
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/Users"
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  Users
               </NavLink>
            </div>

            <div>
               <NavLink
                  to="/Settings"
                  className={(navData) =>
                     navData.isActive ? classes.activeLink : classes.notactive
                  }
               >
                  Settings <BiCog />
               </NavLink>
            </div>
         </nav>
         <div>
            <Sidebar />
         </div>
      </div>
   );
};

export default Navbar;
