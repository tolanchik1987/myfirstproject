import { connect } from "react-redux";
import {
    FollowAC,
    unFollowAC,
    setUsersAC,
} from "../redax/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {
   return {
      usersPage: state.usersPage.users,
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
   };
};

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConteiner;