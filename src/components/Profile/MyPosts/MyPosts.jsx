import { useRef } from "react";
import Post from "../Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
   const postItem = props.postData.map((post, index) => (
      <Post
         key={index}
         message={post.message}
         newLikeCount={props.newLikeCount}
         btnIncrement={props.btnIncrement}
      />
   ));

   const newPostElement = useRef();

   const onAddPost = () => {
      props.addPostActionCreator();
   };

   const clearMessage = () => {
      if (newPostElement.current.value === "Enter message") {
         newPostElement.current.value = "";
      }
   };

   const onChangePost = () => {
      props.updateNewPostText(newPostElement.current.value)
      //props.dispatch(updateNewPostText(event.target.value));
      newPostElement.current.value = "";
   };

   return (
      <div className={classes.posts}>
         <div className={classes.item}>
            <h2>Опубликавать пост:</h2>
            <textarea
               onChange={onChangePost}
               onClick={clearMessage}
               cols="160"
               rows="3"
               ref={newPostElement}
               value={props.newPostText}
            />
            <button onClick={onAddPost} type="button">
               Опубликовать
            </button>
         </div>
         <div className={classes.item_new_post}>Новые посты:</div>
         {postItem}
      </div>
   );
};

export default MyPosts;
