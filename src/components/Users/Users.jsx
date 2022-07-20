import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import photoUser from "../../assets/img/user.png";

class Users extends React.Component {
   componentDidMount() {
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`
         )
         .then((respons) => this.props.setUsers(respons.data.items));
   }

   onPageChanged = (pageNamber) => {
      this.props.setCurentPage(pageNamber);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`
         )
         .then((respons) => {
            this.props.setUsers(respons.data.items);
            this.props.setTotalUserCount(respons.data.totalCount);
         });
   };

   render() {
      const pegesCount = Math.ceil(
         this.props.totalUsersCount / this.props.pageSize
      );

      const pages = [];
      for (let i = 1; i <= pegesCount; i++) {
         pages.push(i);
      }

      let curP = this.props.curentPage;
      let curPF = curP - 10 < 0 ? 0 : curP - 10;
      let curPL = curP + 10;
      let slicedPages = pages.slice(curPF, curPL);

      return (
         <div className={classes.conteiner}>
            Users
            <div className={classes.conteinerUserPages}>
               <div>
                  <p>Page: </p>
                  {slicedPages.map((p) => {
                     return (
                        <span
                           onClick={() => {
                              this.onPageChanged(p);
                           }}
                           className={
                              this.props.curentPage === p &&
                              classes.selectedPage
                           }
                        >
                           {p}
                        </span>
                     );
                  })}
               </div>
            </div>
            {this.props.users.map((user) => (
               <div key={user.id} className={classes.conteiner_users}>
                  <div className={classes.users}>
                     {user.name}
                     <img
                        Alt=""
                        className={classes.img}
                        src={
                           user.photos.small != null
                              ? user.photos.small
                              : photoUser
                        }
                     />
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
                        <div className={classes.userStatus}>
                           {user.status != null
                              ? user.status
                              : "status not found!"}
                        </div>
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
