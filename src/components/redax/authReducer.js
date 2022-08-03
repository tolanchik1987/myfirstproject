import { usersAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
   userId: null,
   login: null,
   email: null,
   isFetching: null,
   isAuth: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.data, isAuth: true };
      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login) => {
   return {
      type: "SET_USER_DATA",
      data: { userId, email, login },
   };
};

export const setAuth = () => {
   return (dispatch) => {
      usersAPI.setAuthUsers().then((data) => {
         if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login));
         }
      });
   };
};

export default authReducer;
