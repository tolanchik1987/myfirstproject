import Post from "../Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {

    const postItem = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

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
                <textarea cols="160" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.item}>newpost</div>
            {postItem}
            {postItem}
        </div>
    );
};

export default MyPosts;