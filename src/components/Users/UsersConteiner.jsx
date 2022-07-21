import React from "react";
import { connect } from "react-redux";
import {
   FollowAC,
   unFollowAC,
   setUsersAC,
   setCurentPageAC,
   setUsersTotalCountAC,
   toggleIsFetchingAC,
} from "../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import classes from "./Users.module.css";

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
               <img
                  className={classes.img_loading}
                  src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"
                  alt=""
               />
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

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(FollowAC(userId));
      },
      unFollow: (userId) => {
         dispatch(unFollowAC(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users));
      },
      setCurentPage: (pageNumber) => {
         dispatch(setCurentPageAC(pageNumber));
      },
      setTotalUserCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount));
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingAC(isFetching));
      },
   };
};

const UsersConteiner = connect(
   mapStateToProps,
   mapDispatchToProps
)(UsersAPIComponent);

export default UsersConteiner;
