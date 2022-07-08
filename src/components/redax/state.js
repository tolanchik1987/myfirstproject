let store = {
   _callSubscriber() {
      "chenged";
   },
   addMessage() {
      const newMessage = {
         id: this._state.dialogsPage.id++,
         message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messageData.push(newMessage);
      this.updateNewPostText("");
      this._callSubscriber(this._state);
      console.log(newMessage);
   },
   btnIncrement() {
      this._state.profilePage.newLikeCount++;
      this._callSubscriber(this._state);
   },
   addPost() {
      const newPost = {
         id: this._state.profilePage.id++,
         message: this._state.profilePage.newPostText,
         likeCount: this._state.profilePage.newLikeCount,
      };
      this._state.profilePage.postData.push(newPost);
      this.updateNewPostText("");
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   updateNewMessageText(newText) {
      this._state.dialogsPage.newMessageText = newText;
      this._callSubscriber(this._state);
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
};

export default store;
window.store = store;
