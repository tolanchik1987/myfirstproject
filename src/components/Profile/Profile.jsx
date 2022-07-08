import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <div className={classes.content}>
         <ProfileInfo />
         <MyPosts newLikeCount={props.state.newLikeCount} postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} btnIncrement={props.btnIncrement}/>
      </div>
   );
};

export default Profile;
