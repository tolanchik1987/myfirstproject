import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
    return(
        <div className={classes.conteiner_sideBar}>
            <h2>Friends</h2>
            <div className={classes.img_ava}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
            </div>
        </div>
    )
};

export default Sidebar;