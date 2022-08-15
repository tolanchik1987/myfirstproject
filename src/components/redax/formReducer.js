
const SUBMIT_FORM = "SUBMIT_FORM";

const initialState = {
    login: "",
    password: "",
    rememberMy: false,
};

const formReducer = (state = initialState, action) => {
   switch (action.type) {
      case SUBMIT_FORM:        
         return { 
            ...state, ...action.data 
         };
      default:
         return state;
   }
};

export const updateAction = (login, password, rememberMy) => {
   return {
      type: "SUBMIT_FORM",
      data: { login, password, rememberMy }
   };
};


export default formReducer;