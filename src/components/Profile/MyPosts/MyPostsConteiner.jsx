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

const MyPostsConteiner = connect(mapStateToProps,{
   updateNewPostText,
   addPostActionCreator,
   btnIncrement,
})(MyPosts);

export default MyPostsConteiner;
