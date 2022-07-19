import { connect } from "react-redux";
import {
   addPostActionCreator,
   btnIncrement,
   updateNewPostText,
} from "../../redax/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText,
      newLikeCount: state.profilePage.newLikeCount,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostText(text));
      },
      addPostActionCreator: () => {
         dispatch(addPostActionCreator());
      },
      btnIncrement: ()=>{
         dispatch(btnIncrement())
      },
   };
};

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
