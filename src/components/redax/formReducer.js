const SUBMIT_FORM = "SUBMIT_FORM";

const initialState = {
    login: "",
    password: "",
    rememberMy: false,
};

const formReducer = (state = initialState, action) => {
   switch (action.type) {
      case SUBMIT_FORM:
         return { ...state };
      default:
         return state;
   }
};

export const updateAction = () => {
   return {
      type: "SUBMIT_FORM",
   };
};


export default formReducer;