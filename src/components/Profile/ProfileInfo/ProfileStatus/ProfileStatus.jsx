import React from "react";
import classes from "./profileStatus.module.css";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      value: "Enter status",
      status: "ggggg",
   };

   activateEditMode() {
      this.setState({
         editMode: true,
      });
   }

   diactivateEditMode() {
    this.setState({
        editMode: false,
    })
   }

   changValue(e) {
      this.setState({
         status: e.target.value,
      });
   }

   render() {
      return (
         <div className={classes.profileStatus}>
            {!this.state.editMode && (
               <div>
                  <span onClick={this.activateEditMode.bind(this)}>
                     {this.state.status}
                  </span>
               </div>
            )}
            {this.state.editMode && (
               <div className={classes.ProfileStatusText}>
                  <input
                     type="text"
                     value={this.state.value}
                     onChange={this.changValue.bind(this)}
                     autoFocus={true}
                     onBlur={this.diactivateEditMode.bind(this)}
                  />
               </div>
            )}
         </div>
      );
   }
}

export default ProfileStatus;
