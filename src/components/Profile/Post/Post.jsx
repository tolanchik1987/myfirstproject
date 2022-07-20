import React from "react";
import classes from "./Post.module.css";

class Post extends React.Component {
   btnIncrement = () => {
      this.props.btnIncrement();
   };
   render() {
      return (
         <div className={classes.item}>
            <img Alt="" src="https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp" />
            {this.props.message}
            <div>
               <button
                  onClick={
                     this.btnIncrement
                  } /*onClick={ props.dispatch({type: 'BTN-INCREMENT'})}*/
               >
                  <img Alt="" src="https://pngimg.com/uploads/like/like_PNG14.png" />
                  Like
               </button>
               <p>Количество лайков: {this.props.newLikeCount}.</p>
            </div>
         </div>
      );
   }
}

export default Post;
