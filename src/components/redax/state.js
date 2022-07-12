import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const store = {
   _callSubscriber() {
      "chenged";
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   _state: {
      profilePage: {
         postData: [
            { id: 1, message: "How i You?", likeCount: 15 },
            { id: 2, message: "Whot is your name?", likeCount: 35 },
         ],
         id: 0,
         newPostText: "Enter message",
         newLikeCount: 0,
      },

      dialogsPage: {
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
      },
   },
   getState() {
      return this._state;
   },
   dispatch(action) {
      profileReducer(this._state.profilePage, action);
      dialogsReducer(this._state.dialogsPage, action);
      this._callSubscriber(this._state);
   },
};

export const addPostActionCreator = () => {
   return {
      type: "ADD-POST",
   };
};

export const updateNewPostText = (text) => {
   return {
      type: "UPDATE-NEW-POST-TEXT",
      newText: text,
   };
};

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

export default store;
window.store = store;
