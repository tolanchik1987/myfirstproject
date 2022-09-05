import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusFunctional from "./ProfileStatus/ProfileStatusFunctional";

const ProfileInfo = (props) => {
   const [hiden, setHiden] = React.useState(true);

   const changHiden = () => {
      setHiden(true);
   };

   const visibleLoadAvatar = () => {
      setHiden(false);
   };

   if (!props.profile) {
      return <Preloader />;
   }

   const handleFileSelect = (event) => {
      props.savePhoto(event.target.files[0]);
   };

   return (
      <div>
         <div className={classes.item}>
            <div className={classes.item_ava}>
               <div className={classes.conteinerPhoto}>
                  <img
                     alt=""
                     src={
                        props.profile.photos.large ||
                        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                     }
                  />
               </div>
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
            <div className={classes.contacts}>
               <b>Contacts:</b>
               {Object.keys(props.profile.contacts).map(key => {
                  return <b key={key}>{key}: {props.profile.contacts[key]}</b>
               })}        
            </div>
         </div>
         <div
            onClick={visibleLoadAvatar}
            style={{
               cursor: "pointer",
               paddingLeft: 20,
               fontSize: 16,
               fontFamily: "italic",
               fontStyle: "italic",
            }}
         >
            Изменить аватар
            {props.isOwner && (
               <input
                  type={"file"}
                  onChange={handleFileSelect}
                  hidden={hiden}
                  onBlur={changHiden}
               />
            )}
         </div>
         <div className={classes.profileStatus}>
            <ProfileStatusFunctional
               status={props.status}
               upDateStatus={props.upDateStatus}
            />
         </div>
      </div>
   );
};

export default ProfileInfo;
