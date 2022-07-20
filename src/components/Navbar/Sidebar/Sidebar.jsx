import React from "react";
import classes from "./Sidebar.module.css";

class Sidebar extends React.Component {
   render() {
      return (
         <div className={classes.conteiner_sideBar}>
            <h2>Friends</h2>
            <div className={classes.img_ava}>
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
               <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
               />
            </div>
         </div>
      );
   }
}

export default Sidebar;
