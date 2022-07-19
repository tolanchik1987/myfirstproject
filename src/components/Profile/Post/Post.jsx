
import { useState } from "react";
import classes from "./Post.module.css";

const Post = (props) => {

   const btnIncrement=()=>{
      props.btnIncrement()
   }

   return (
      <div className={classes.item}>
         <img src="https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp" />
         {props.message}
         <div>
            <button onClick={btnIncrement}/*onClick={ props.dispatch({type: 'BTN-INCREMENT'})}*/>
               <img src="https://pngimg.com/uploads/like/like_PNG14.png" />
               Like
            </button >
            <p>Количество лайков: {props.newLikeCount}.</p>
         </div>
      </div>
   );
};

export default Post;
