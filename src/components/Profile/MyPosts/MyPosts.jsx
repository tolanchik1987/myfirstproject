import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
    <div className={classes.posts}>
            <div className={classes.item}>ava</div>
            <div className={classes.item}>
                <p>Mypost</p>
                <p><textarea name="comment" cols="160" rows="3"></textarea></p>
            </div>
            <div className={classes.item}>newpost</div>
            <div className={classes.item}>post</div>
        </div>
    );
};

export default MyPosts;