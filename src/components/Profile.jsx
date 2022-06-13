import classesProfile from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classesProfile.content}>
            <div>
               <img className={classesProfile.img_1} src="https://www.utu.fi/sites/default/files/styles/hero_xl/public/media/drupal/matt-hardy-6ArTTluciuA-unsplash.jpg?itok=YyCLXXb9"/>
            </div>
            <div>
               <img className={classesProfile.img_2} src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
            </div>
            <div className={classesProfile.posts}>
                <div className={classesProfile.item}>ava</div>
                <div className={classesProfile.item}>mypost</div>
                <div className={classesProfile.item}>newpost</div>
                <div className={classesProfile.item}>post</div>
            </div>
        </div>
    );
};

export default Profile;