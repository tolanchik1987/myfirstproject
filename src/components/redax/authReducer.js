import { securityAPI, usersAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_MESSAGE_ERROR = "SET_MESSAGE_ERROR";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"

const initialState = {
   userId: null,
   login: null,
   email: null,
   isFetching: null,
   isAuth: false,
   messages: "",
   captchaUrl: null
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.payload };
      case SET_MESSAGE_ERROR:
         return { ...state, messages: action.messages}
      case SET_CAPTCHA_URL:
         return {...state, captchaUrl: action.url}
      default:
         return state;
   }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
   return {
      type: "SET_USER_DATA",
      payload: { userId, email, login, isAuth},
   };
};

export const setMessageError = (messages) => {
   return {
      type: "SET_MESSAGE_ERROR",
      messages,
   };
};

export const setCaptchaUrl = (url) => {
   return {
      type: "SET_CAPTCHA_URL",
      url,
   }
}

export const setAuth = () => {
   return async (dispatch) => {
      const data = await usersAPI.setAuthUsers()
         if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
   };
};


export const login = (email, password, rememberMe) => async (dispatch) => {
   const data = await usersAPI.login(email, password, rememberMe)
      if (data.resultCode === 0) {
         dispatch(setAuth());    
      } 
      const messages = data.messages
      dispatch(setMessageError(messages));
};

export const logout = () => async (dispatch) => {
   const data = await usersAPI.logout()
      if (data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false));
      }
};

export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl()
      const captcha = response.data.url
      dispatch(setCaptchaUrl(captcha));    
};


export default authReducer;
