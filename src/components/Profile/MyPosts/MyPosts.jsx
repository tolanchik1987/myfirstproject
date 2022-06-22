// import React from "react";
import { useRef } from "react";
import Post from "../Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {

    const postItem = props.postData.map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    const newPostElement = useRef();
    
    const buttonAddPost = () => {
        alert(newPostElement.current.value)
        newPostElement.current.value = '';
    } 

    const clearMessage = () => {
        if (newPostElement.current.value == "Enter message") {newPostElement.current.value = ''};
    };

    return (
    <div className={classes.posts}>
            <div className={classes.item}>
                <div className={classes.item_ava}>
                    <img src="https://vraki.net/sites/default/files/inline/images/2_3.png" />
                    <div className={classes.userName}>Anatoliy</div>
                </div>
            </div>
            <div className={classes.item}>
                <h2>Mypost</h2>
                <textarea onClick={clearMessage} cols="160" rows="3" ref={newPostElement} defaultValue='Enter message'></textarea>
                <button onClick={buttonAddPost}>Add post</button>
            </div>
            <div className={classes.item}>newpost</div>
            {postItem}
            {postItem}
        </div>
    );
};

export default MyPosts;