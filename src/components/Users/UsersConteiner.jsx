import React from "react";
import { connect } from "react-redux";
import {
   Follow,
   unFollow,
   setUsers,
   setCurentPage,
   setUsersTotalCount,
   toggleIsFetching,
} from "../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
         )
         .then((respons) => {
            this.props.setUsers(respons.data.items);
            this.props.toggleIsFetching(false);
         });
   }
   onPageChanged = (pageNamber) => {
      this.props.setCurentPage(pageNamber);
      this.props.toggleIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`
         )
         .then((respons) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(respons.data.items);
            this.props.setTotalUserCount(respons.data.totalCount);
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
                  follow={this.props.follow}
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
