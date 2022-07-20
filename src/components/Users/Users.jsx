import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
   constructor(props){
      super(props)
      axios
         .get("https://social-network.samuraijs.com/api/1.0/users")
         .then((respons) => this.props.setUsers(respons.data.items));
   }
   
   render() {
      return (
         <div className={classes.conteiner}>
            Users
            {this.props.users.map((user) => (
               <div key={user.id} className={classes.conteiner_users}>
                  <div className={classes.users}>
                     {user.name}
                     <img className={classes.img} src={user.photos.small != null ? user.photos.small : "https://www.fortespro.ru/storage/avatars/no-image.png"} />
                     <div>
                        {user.followed ? (
                           <button
                              className={classes.btn_followed}
                              onClick={() => this.props.unFollow(user.id)}
                           >
                              Unsubscribe
                           </button>
                        ) : (
                           <button
                              className={classes.btn_followed}
                              onClick={() => this.props.follow(user.id)}
                           >
                              Subscribe
                           </button>
                        )}
                     </div>
                  </div>
                  <div className={classes.userInfo}>
                     <div>
                        <div className={classes.userName}>{user.name}</div>
                        <div className={classes.userStatus}>{user.status != null ? user.status : "status not found!"}</div>
                     </div>
                     <div>
                        <div className={classes.userLocation}>
                           {"user.location.country"}
                        </div>
                        <div className={classes.userCity}>
                           {"user.location.city"}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
            <button className={classes.btn_showMore}>Show more...</button>
         </div>
      );
   }
}

export default Users;
