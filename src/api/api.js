import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "89e89bfc-7b12-4723-8b41-dc273aa29321",
   },
});

export const usersAPI = {
   async getUsers(curentPage, pageSize) {
      return await instance
         .get(`users?page=${curentPage}&count=${pageSize}`)
         .then((response) => {
            return response.data;
         });
   },

   async followSuccess(userId) {
      return await instance.post(`follow/${userId}`).then((response) => {
         return response.data;
      });
   },

   async unFollowSuccess(userId) {
      return await instance.delete(`follow/${userId}`).then((response) => {
         return response.data;
      });
   },

   async setAuthUsers() {
      return await instance.get("auth/me").then((response) => {
         return response.data;
      });
   },

   // async setUsers(profileId) {
   //    console.warn("Obsolut method. Plise ProfileAPI object")
   //       return ProfileAPI.getProfile(profileId)
   // },
};

export const profileAPI = {
   async getProfile(profileId) {
      return await instance.get(`profile/${profileId}`).then((response) => {
         return response.data;
      });
   },
   async getStatus(userId) {
      return await instance.get(`profile/status/${userId}`).then((response) => {
         return response.data;
      });
   },
   async upDateStatus(status) {
      return await instance.put(`profile/status/`,{status: status}).then((response) => {
         return response.data;
      });
   }
}