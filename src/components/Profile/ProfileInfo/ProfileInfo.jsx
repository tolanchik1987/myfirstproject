import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusFunctional from "./ProfileStatus/ProfileStatusFunctional"

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />;
   }

   return (
      <div>
         {/* <img
            alt=""
            className={classes.img_1}
            src="https://cdn.slidemodel.com/wp-content/uploads/8151-01-social-media-word-cloud-picture-1.jpg"
         /> */}
         <div className={classes.item}>
            <div className={classes.item_ava}>
               <img
                  alt=""
                  src={
                     props.profile.photos.large
                        ? props.profile.photos.large
                        : "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  }
               />
               <div className={classes.userName}>{props.profile.fullName}</div>
               <div className={classes.userInfo}>
                  <div>{props.profile.aboutMe}</div>
                  <div>
                     {props.profile.lookingForAJob === true
                        ? "В поисках работы: "
                        : "Место работы: "}{" "}
                     {props.profile.lookingForAJob === true
                        ? props.profile.lookingForAJobDescription
                        : "Не ищу работу"}
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.profileStatus}>
            <ProfileStatusFunctional status={props.status} upDateStatus={props.upDateStatus}/>
         </div>
      </div>
   );
};

export default ProfileInfo;
