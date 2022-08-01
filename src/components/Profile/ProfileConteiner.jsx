import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import classes from "./Profile.module.css";
import { setUsersProfile } from "../redax/profile-reducer";
import { toggleIsFetching } from "../redax/users-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
   }

   return ComponentWithRouterProp;
}

class ProfileConteiner extends Component {
   componentDidMount() {
      let profileId = this.props.router.params.profileId;
      if (!profileId) {
         profileId = 25067;
      }
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/profile/${profileId}`
         )
         .then((respons) => {
            this.props.setUsersProfile(respons.data);
         });
   }

   render() {
      return (
         <div className={classes.content}>
            <Profile {...this.props} profile={this.props.profile} />
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
});

// const WithUrlDataConteinerComponent = withRouter(ProfileConteiner);

export default connect(mapStateToProps, { setUsersProfile, toggleIsFetching  })(
   withRouter(ProfileConteiner)
);
