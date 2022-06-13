import "./Profile.modul.css";

const Profile = () => {
    return (
        <div className="content">
            <div>
               <img className="img_1" src="https://www.utu.fi/sites/default/files/styles/hero_xl/public/media/drupal/matt-hardy-6ArTTluciuA-unsplash.jpg?itok=YyCLXXb9"/>
            </div>
            <div>
               <img className="img_2" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
            </div>
            <div className="posts">
                <div className="item">ava</div>
                <div className="item">mypost</div>
                <div className="item">newpost</div>
                <div className="item">post</div>
            </div>
        </div>
    );
};

export default Profile;