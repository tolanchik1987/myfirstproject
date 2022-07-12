const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

function profileReducer(state, action) {
    if (action.type === ADD_POST) {
        const newPost = {
            id: state.id++,
            message: state.newPostText,
            likeCount: state.newLikeCount,
        };
        state.postData.push(newPost);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    } else if (action.type === BTN_INCREMENT) {
        // this._state.profilePage.newLikeCount=+1;
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

export default profileReducer;