
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp"/>
            {props.message}
            <div>
                <button><img src="https://pngimg.com/uploads/like/like_PNG14.png"/>Like</button>
                <p>Количество лайков: {props.likeCount}.</p>
            </div>
        </div>
    )
}

export default Post;