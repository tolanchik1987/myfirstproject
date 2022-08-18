import { usersAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
   userId: null,
   login: null,
   email: null,
   isFetching: null,
   isAuth: false,
};

const error = "Error invalid email or password!"

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.payload };
      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
   return {
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth },
   };
};

export const setAuth = () => {
   return (dispatch) => {
      usersAPI.setAuthUsers().then((data) => {
         if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
      });
   };
};


export const login = (email, password, rememberMe) => (dispatch) => {
   usersAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
         dispatch(setAuth());    
      } 
      alert(`${error}`)  
   });
};

export const logout = () => (dispatch) => {
   usersAPI.logout().then((data) => {
      if (data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false));
      }
   });
};

export default authReducer;
