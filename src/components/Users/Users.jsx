import React from "react";
import classes from "./Users.module.css";
import photoUser from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
   const pegesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   const pages = [];
   for (let i = 1; i <= pegesCount; i++) {
      pages.push(i);
   }

   let curP = props.curentPage;
   let curPF = curP - 10 < 0 ? 0 : curP - 10;
   let curPL = curP + 10;
   let slicedPages = pages.slice(curPF, curPL);

   return (
      <div className={classes.conteiner}>
         Users
         <div className={classes.conteinerUserPages}>
            <div>
               <p>Page: </p>
               {slicedPages.map((p, index) => {
                  return (
                     <span
                        key={index}
                        onClick={() => {
                           props.onPageChanged(p);
                        }}
                        className={
                           props.curentPage === p && classes.selectedPage
                        }
                     >
                        {p}
                     </span>
                  );
               })}
            </div>
         </div>
         {props.users.map((user) => (
            <div key={user.id} className={classes.conteiner_users}>
               <div className={classes.users}>
                  {user.name}
                  <div>
                     <NavLink to={"/Profile/" + user.id}>
                        <img
                           alt=""
                           className={classes.img}
                           src={
                              user.photos.small != null
                                 ? user.photos.small
                                 : photoUser
                           }
                        />
                     </NavLink>
                  </div>
                  <div>
                     {user.followed ? (
                        <button
                           className={classes.btn_followed}
                           onClick={() => props.unFollow(user.id)}
                        >
                           Unsubscribe
                        </button>
                     ) : (
                        <button
                           className={classes.btn_followed}
                           onClick={() => props.follow(user.id)}
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
};

export default Users;
