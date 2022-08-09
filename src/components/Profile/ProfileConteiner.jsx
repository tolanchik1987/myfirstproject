import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import classes from "./Profile.module.css";
import { getUsersProfile, getStatus, upDateStatus } from "../redax/profile-reducer";
import { toggleIsFetching } from "../redax/users-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirectHOC from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
   }

   return ComponentWithRouterProp;
}

class ProfileConteiner extends React.Component {
   componentDidMount() {
      this.props.getUsersProfile(this.props.router.params.profileId);
      this.props.getStatus(this.props.router.params.profileId)
   }

   render() {
      return (
         <div className={classes.content}>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} upDateStatus={this.props.upDateStatus}/>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   isAuth: state.authUser.isAuth,
   status: state.profilePage.status,
});

export default compose(
   connect(mapStateToProps, { toggleIsFetching, getUsersProfile,getStatus,upDateStatus ,}),
   withRouter,
   withAuthRedirectHOC
)(ProfileConteiner);
