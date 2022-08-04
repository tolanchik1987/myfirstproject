import { usersAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const BTN_INCREMENT = "BTN-INCREMENT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
   postData: [
      { id: 1, message: "How i You?", likeCount: 15 },
      { id: 2, message: "Whot is your name?", likeCount: 35 },
   ],
   id: 2,
   newPostText: "Enter message",
   newLikeCount: 0,
   profile: null,
};

function profileReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: (state.id += 1),
            message: state.newPostText,
            likeCount: state.newLikeCount,
         };
         return {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: "",
         };
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };
      case BTN_INCREMENT:
         return {
            ...state,
            newLikeCount: (state.newLikeCount += 1),
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };
      // this._state.profilePage.newLikeCount=+1;
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

export const setUsersProfile = (profile) => {
   return {
      type: "SET_USER_PROFILE",
      profile,
   };
};

export const getUsersProfile = (router) => {
   return (dispatch) => {
      let profileId = router;
      if (!profileId) {
         profileId = 25067;
      }
      usersAPI.setUsers(profileId).then((data) => {
         dispatch(setUsersProfile(data));
      });
   };
};

export default profileReducer;
