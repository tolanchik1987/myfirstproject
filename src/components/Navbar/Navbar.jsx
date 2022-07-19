import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";

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
                  Music
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
                  Settings
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
