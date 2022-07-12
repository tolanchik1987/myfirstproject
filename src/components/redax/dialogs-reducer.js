const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

function dialogsReducer(state, action) {
    if (action.type === ADD_MESSAGE) {
        const newMessage = {
           id: state.id++,
           message: state.newMessageText,
        };
        state.messageData.push(newMessage);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
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
