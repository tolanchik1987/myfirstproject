import React from "react";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   return (
      <div className={classes.content}>
         <ProfileInfo  profile={props.profile} status={props.status} upDateStatus={props.upDateStatus}/>
         <MyPostsConteiner store={props.store} />
      </div>
   );
};

export default Profile;
