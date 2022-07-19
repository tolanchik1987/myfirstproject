import { FollowAC } from "../redax/users-reducer";
import classes from "./Users.module.css";

const Users = (props) => {
   return (
      <div className={classes.conteiner}>
         Users
         {props.usersPage.map((user) => (
            <div key={user.id} className={classes.conteiner_users}>
               <div className={classes.users}>
                  {user.fullName}
                  <img className={classes.img} src={user.fotoUrl} />
                  <div>
                     {user.followed ? (
                        <button
                           className={classes.btn_followed}
                           onClick={() => props.unFollow(user.id)}
                        >
                           Follow
                        </button>
                     ) : (
                        <button
                           className={classes.btn_followed}
                           onClick={() => props.follow(user.id)}
                        >
                           Unfollow
                        </button>
                     )}
                  </div>
               </div>
               <div className={classes.userInfo}>
                  <div>
                     <div className={classes.userName}>{user.fullName}</div>
                     <div className={classes.userStatus}>{user.status}</div>
                  </div>
                  <div>
                     <div className={classes.userLocation}>
                        {user.location.country}
                     </div>
                     <div className={classes.userCity}>
                        {user.location.city}
                     </div>
                  </div>
               </div>
            </div>
         ))}
         <button className={classes.btn_showMore}>Show more...</button>
      </div>
   );
};

export default Users;
