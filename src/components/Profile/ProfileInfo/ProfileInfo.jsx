import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {
   render() {
      return (
         <div>
            <img Alt=""
               className={classes.img_1}
               src="https://cdn.slidemodel.com/wp-content/uploads/8151-01-social-media-word-cloud-picture-1.jpg"
            />
         </div>
      );
   }
}

export default ProfileInfo;
