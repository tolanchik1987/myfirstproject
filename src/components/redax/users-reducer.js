import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURENT_PAGE = "SET-CURENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const followedState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 100,
   curentPage: 1,
   isFetching: false,
   followingInProgress: [],
};

function usersReducer(state = followedState, action) {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
               }
               return user;
            }),
         };
      case SET_USERS:
         return { ...state, users: action.users };
      case SET_CURENT_PAGE:
         return { ...state, curentPage: action.curentPage };
      case SET_USERS_TOTAL_COUNT:
         return { ...state, totalUsersCount: action.totalCount };
      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching };
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         };
      default:
         return state;
   }
}
export const Follow = (userId) => {
   return {
      type: "FOLLOW",
      userId,
   };
};

export const unFollow = (userId) => {
   return {
      type: "UNFOLLOW",
      userId,
   };
};

export const setUsers = (users) => {
   return {
      type: "SET-USERS",
      users,
   };
};

export const setCurentPage = (curentPage) => {
   return {
      type: "SET-CURENT-PAGE",
      curentPage,
   };
};

export const setUsersTotalCount = (totalCount) => {
   return {
      type: "SET-USERS-TOTAL-COUNT",
      totalCount,
   };
};

export const toggleIsFetching = (isFetching) => {
   return {
      type: "TOGGLE-IS-FETCHING",
      isFetching,
   };
};
export const toggleIsFollowingProgress = (isFetching, userId) => {
   return {
      type: "TOGGLE_IS_FOLLOWING_PROGRESS",
      isFetching,
      userId,
   };
};

export const getUsersThunkCreator = (curentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(curentPage, pageSize).then((data) => {
         dispatch(setUsers(data.items));
         dispatch(toggleIsFetching(false));
      });
   };
};

export default usersReducer;
