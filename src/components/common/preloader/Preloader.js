import React from "react";
import classes from "../../Users/Users.module.css";

const Preloader = (props) => {
   return (
      <div>
         <img
            className={classes.img_loading}
            src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
            alt=""
         />
      </div>
   );
};

export default Preloader;
