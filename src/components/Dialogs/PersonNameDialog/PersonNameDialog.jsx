import classes from "./PersonNameDialog.module.css";
import { NavLink } from "react-router-dom";


const PersonNameDialog = (props) => {
    return (
        <div className={classes.dialogs_item}>
            <div className={classes.dialog}>
                <NavLink to="/Dialogs/dialog_1"  className = { navData => navData.isActive ? classes.activeLink : classes.notactive }>Andrey</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/Dialogs/dialog_2"  className = { navData => navData.isActive ? classes.activeLink : classes.notactive }>Stas</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/Dialogs/dialog_3"  className = { navData => navData.isActive ? classes.activeLink : classes.notactive }>Nastya</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/Dialogs/dialog_4"  className = { navData => navData.isActive ? classes.activeLink : classes.notactive }>Sveta</NavLink>
            </div>
        </div>
    );
};

export default PersonNameDialog;