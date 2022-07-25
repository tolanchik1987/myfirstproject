import React from "react";
import classes from "../../Users/Users.module.css";
import loading from "../../../assets/img/1494.png"

const Preloader = (props) => {
   return (
      <div>
         <img
            className={classes.img_loading}
            src={loading}
            alt=""
         />
      </div>
   );
};

export default Preloader;
