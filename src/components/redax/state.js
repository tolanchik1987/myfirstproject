import { rerenderEntireTree } from "../../render";

export const addMessage = (postMessage) => {
   const newMessage = {
      id: state.dialogsPage.messageData.map((e) => e.id),
      message: postMessage,
   };
   state.dialogsPage.messageData.push(newMessage);
   rerenderEntireTree(state);
   console.log(newMessage);
};

export const addPost = () => {
   const newPost = {
      id: state.profilePage.postData.map((el) => el.id),
      message: state.profilePage.newPostText,
      likeCount: 0,
   };
   state.profilePage.postData.push(newPost);
   updateNewPostText("");
   rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
};

const state = {
   profilePage: {
      postData: [
         { id: 1, message: "How i You?", likeCount: 15 },
         { id: 2, message: "Whot is your name?", likeCount: 35 },
      ],
      newPostText: "Enter message",
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
   },
};

export default state;
