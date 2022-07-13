const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const BTN_INCREMENT = "BTN-INCREMENT";

const initialState = {
    postData: [
       { id: 1, message: "How i You?", likeCount: 15 },
       { id: 2, message: "Whot is your name?", likeCount: 35 },
    ],
    id: 0,
    newPostText: "Enter message",
    newLikeCount: 0,
 }

function profileReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: state.id++,
            message: state.newPostText,
            likeCount: state.newLikeCount,
         };
         state.postData.push(newPost);
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      case BTN_INCREMENT:
         // this._state.profilePage.newLikeCount=+1;
         return state;
      default:
         return state;
   }
}

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

export const btnIncrement = () => {
   return {
      type: "BTN-INCREMENT",
   };
};

export default profileReducer;
