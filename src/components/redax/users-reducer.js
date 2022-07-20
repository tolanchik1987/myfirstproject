const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const followedState = {
   users:[
      
   ]
   // users: [[
   //    {
   //       id: 1,
   //       fotoUrl: "https://www.fortespro.ru/storage/avatars/no-image.png",
   //       followed: false,
   //       status: "I am a boss",
   //       fullName: "Dmitry",
   //       location: { country: "Russia", city: "Moscow" },
   //    },
   //    {
   //       id: 2,
   //       fotoUrl: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
   //       followed: true,
   //       status: "I am like futbool",
   //       fullName: "Sasha",
   //       location: { country: "Ukrein", city: "Kiev" },
   //    },
   //    {
   //       id: 3,
   //       fotoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
   //       followed: false,
   //       status: "I am like pc game",
   //       fullName: "Nastya",
   //       location: { country: "Belarus", city: "Minsk" },
   //    },
   // ]],
};

function usersReducer(state = followedState, action) {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
               }
               return user;
            }),
         };
      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] };
      default:
         return state;
   }
}
export const FollowAC = (userId) => {
   return {
      type: "FOLLOW",
      userId,
   };
};

export const unFollowAC = (userId) => {
   return {
      type: "UNFOLLOW",
      userId,
   };
};

export const setUsersAC = (users) => {
   return {
      type: "SET-USERS",
      users,
   };
};

export default usersReducer;
