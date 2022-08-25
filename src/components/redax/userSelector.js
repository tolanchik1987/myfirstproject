
export const getUsersSelector = (state) => {
   return state.usersPage.users;
};

export const getPageSizeSelector = (state) => {
   return state.usersPage.pageSize;
};

export const getTotalUsersCountSelector = (state) => {
   return state.usersPage.totalUsersCount;
};

export const getCurentPageSelector = (state) => {
   return state.usersPage.curentPage;
};

export const getIsFetchingSelector = (state) => {
   return state.usersPage.isFetching;
};

export const getFollowingInProgressSelector = (state) => {
   return state.usersPage.followingInProgress;
};

export const getIsAuthSelector = (state) => {
   return state.authUser.isAuth;
};
