import React from "react";
import classes from "./profileStatus.module.css";

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   };

   activateEditMode = () => {
      this.setState({
         editMode: true,
      });
   };

   diactivateEditMode = () => {
      this.setState({
         editMode: false,
      });
      this.props.upDateStatus(this.state.status);
   };

   changValue = (e) => {
      this.setState({
         status: e.target.value,
      });
   };

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         });
      }
   }

   render() {
      return (
         <div className={classes.profileStatus}>
            {!this.state.editMode && (
               <div>
                  <span onClick={this.activateEditMode}>
                     {this.props.status || "Click this for enter status"}
                  </span>
               </div>
            )}
            {this.state.editMode && (
               <div className={classes.ProfileStatusText}>
                  <input
                     type="text"
                     placeholder="Enter status"
                     value={this.state.status}
                     onChange={this.changValue}
                     autoFocus={true}
                     onBlur={this.diactivateEditMode}
                  />
               </div>
            )}
         </div>
      );
   }
}

export default ProfileStatus;
