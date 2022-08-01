import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "89e89bfc-7b12-4723-8b41-dc273aa29321",
     }
})

export const usersAPI = {
  async getUsers(curentPage, pageSize) {
   return await instance
      .get(
         `users?page=${curentPage}&count=${pageSize}`
      )
      .then((response) => {
         return response.data;
      });
},

 async FollowedPost(userId) {
   return await instance
      .post(
         `follow/${userId}`,
         {}
      )
      .then((response) => {
         return response.data;
      });
},

 async FollowedDel(userId) {
   return await instance
      .delete(`follow/${userId}`)
      .then((respons) => {
         return respons.data;
      });
}}
