import Post from "../Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    const postData = [
        {id: 1, message: "How i You?", likeCount: 15},
        {id: 2, message: "Whot is your name?", likeCount: 35}
    ]

    const postItem = postData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

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
        </div>
    );
};

export default MyPosts;