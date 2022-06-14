import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
               <img className={classes.img_1} src="https://www.utu.fi/sites/default/files/styles/hero_xl/public/media/drupal/matt-hardy-6ArTTluciuA-unsplash.jpg?itok=YyCLXXb9"/>
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;