const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogsData: [
       { id: "dialog_1", name: "Andrey" },
       { id: "dialog_2", name: "Stas" },
       { id: "dialog_3", name: "Nastya" },
       { id: "dialog_4", name: "Sveta" },
    ],

    messageData: [
       { id: 1, message: "1. Counting objects: 100% (42/42), done." },
       { id: 2, message: "2 .Delta compression using up to 4 threads" },
       {
          id: 3,
          message:
             "3. Writing objects: 100% (27/27), 94.08 KiB | 1.40 MiB/s, done.",
       },
       {
          id: 4,
          message:
             "4. Попробуйте новую кроссплатформенную оболочку PowerShell",
       },
    ],
    id: 0,
    newMessageText: "Enter message",
 }

function dialogsReducer(state = initialState, action) {
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
