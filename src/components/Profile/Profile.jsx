import React from "react";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <div className={classes.content}>
         <ProfileInfo  profile={props.profile}/>
         <MyPostsConteiner store={props.store} />
      </div>
   );
};

export default Profile;
