const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

function dialogsReducer(state, action) {
   switch (action.type) {
      case ADD_MESSAGE:
         const newMessage = {
            id: state.id++,
            message: state.newMessageText,
         };
         state.messageData.push(newMessage);
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;
      default:
         return state;
   }
}
export const addMessageCreator = () => {
   return {
      type: "ADD-MESSAGE",
   };
};

export const updateNewMessageText = (text) => {
   return {
      type: "UPDATE-NEW-MESSAGE-TEXT",
      newText: text,
   };
};

export default dialogsReducer;
