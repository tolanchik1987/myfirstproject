// import  Preloader  from "../common/preloader/Preloader"
import { setAuth } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
   initialized: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZED:
         return { ...state, initialized: action.initialized };
      default:
         return state;
   }
};

export const setInitializedAction = (initialized) => ({
   type: "SET_INITIALIZED",
   initialized,
});

export const initialize = () => {
    return async (dispatch) => {
        await dispatch(setAuth())
        dispatch(setInitializedAction(true))
        
    } 
 };

export default authReducer;
