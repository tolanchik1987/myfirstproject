import React from "react";
import { connect } from "react-redux";
import {
   Follow,
   unFollow,
   setUsers,
   setCurentPage,
   setUsersTotalCount,
   toggleIsFetching,
} from "../redax/users-reducer";import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.curentPage, this.props.pageSize).then((data) => {
         this.props.setUsers(data.items);
         this.props.toggleIsFetching(false);
      });
   }
   onPageChanged = (pageNamber) => {
      this.props.setCurentPage(pageNamber);
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(pageNamber, this.props.pageSize).then((data) => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setUsersTotalCount(data.totalCount);
      });
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
                  Follow={this.props.Follow}
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
   };
};

const UsersConteiner = connect(mapStateToProps, {
   Follow,
   unFollow,
   setUsers,
   setCurentPage,
   setUsersTotalCount,
   toggleIsFetching,
})(UsersAPIComponent);

export default UsersConteiner;
