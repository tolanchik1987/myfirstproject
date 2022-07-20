import React from "react";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
   render() {
      return (
         <div className={classes.content}>
            <ProfileInfo />
            <MyPostsConteiner store={this.props.store} />
         </div>
      );
   }
}

export default Profile;
