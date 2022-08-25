import { useEffect } from "react";
import { useState } from "react";
import classes from "./profileStatus.module.css";

const ProfileStatus = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);
   useEffect(() => {
         setStatus(props.status);
   }, [props.status]);

   const activateEditMode = () => {
      setEditMode(true);
   };

   const diactivateEditMode = () => {
      setEditMode(false);
      props.upDateStatus(status);
   };

   const changValue = (e) => {
      setStatus(e.target.value);
   };

   return (
      <div className={classes.profileStatus}>
         {!editMode && (
            <div>
               <span onClick={activateEditMode}>
                  {props.status || "Click this for enter status"}
               </span>
            </div>
         )}
         {editMode && (
            <div className={classes.ProfileStatusText}>
               <input
                  type="text"
                  placeholder="Enter status"
                  value={status}
                  onChange={changValue}
                  autoFocus={true}
                  onBlur={diactivateEditMode}
               />
            </div>
         )}
      </div>
   );
};

export default ProfileStatus;
