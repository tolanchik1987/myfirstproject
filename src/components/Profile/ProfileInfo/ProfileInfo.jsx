import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
   render() {
      return (
         <div>
            <img
               className={classes.img_1}
               src="https://www.utu.fi/sites/default/files/styles/hero_xl/public/media/drupal/matt-hardy-6ArTTluciuA-unsplash.jpg?itok=YyCLXXb9"
            />
         </div>
      );
   }
}

export default ProfileInfo;
