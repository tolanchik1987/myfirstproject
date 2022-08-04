import React from "react";
import { connect } from "react-redux";
import {
   follow,
   unFollow,
   setCurentPage,
   toggleIsFollowingProgress,
   getUsers,
} from "../redax/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import withAuthRedirectHOC from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.curentPage, this.props.pageSize);
   }
   onPageChanged = (pageNamber) => {
      this.props.getUsers(pageNamber, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ? (
               <Preloader />
            ) : (
               <Users
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  curentPage={this.props.curentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unFollow={this.props.unFollow}
                  follow={this.props.follow}
                  followingInProgress={this.props.followingInProgress}
               />
            )}
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      curentPage: state.usersPage.curentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
      isAuth: state.authUser.isAuth,
   };
};

export default compose(
   connect(mapStateToProps, {
      follow,
      unFollow,
      setCurentPage,
      toggleIsFollowingProgress,
      getUsers,
   }),
   withAuthRedirectHOC
)(UsersAPIComponent);
