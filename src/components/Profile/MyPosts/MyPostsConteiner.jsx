import { connect } from "react-redux";
import {
   addPostActionCreator,
   updateNewPostText,
} from "../../redax/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText,
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
   };
};

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
