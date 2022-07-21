const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURENT_PAGE = "SET-CURENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const followedState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 100,
   curentPage: 1,
   isFetching: false,
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
         return {...state, isFetching: action.isFetching}
         default:
         return state;
   }
}
export const FollowAC = (userId) => {
   return {
      type: "FOLLOW",
      userId,
   };
};

export const unFollowAC = (userId) => {
   return {
      type: "UNFOLLOW",
      userId,
   };
};

export const setUsersAC = (users) => {
   return {
      type: "SET-USERS",
      users,
   };
};

export const setCurentPageAC = (curentPage) => {
   return {
      type: "SET-CURENT-PAGE",
      curentPage,
   };
};

export const setUsersTotalCountAC = (totalCount) => {
   return {
      type: "SET-USERS-TOTAL-COUNT",
      totalCount,
   };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
      type: "TOGGLE-IS-FETCHING",
      isFetching
   }
}


export default usersReducer;
