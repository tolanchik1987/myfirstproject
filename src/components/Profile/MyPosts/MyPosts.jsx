import Post from "../Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
    <div className={classes.posts}>
            <div className={classes.item}>ava</div>
            <div className={classes.item}>
                <p>Mypost</p>
                <textarea cols="160" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.item}>newpost</div>
            <Post message="How i You?"/>
            <Post message="Whot is your name?"/>
        </div>
    );
};

export default MyPosts;