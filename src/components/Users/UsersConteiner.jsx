import { connect } from "react-redux";
import {
    FollowAC,
    unFollowAC,
    setUsersAC,
    setCurentPageAC,
    setUsersTotalCountAC,
} from "../redax/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      curentPage: state.usersPage.curentPage,
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
      dispatch(setCurentPageAC(pageNumber))
     },
     setTotalUserCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
     }

   };
};

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;