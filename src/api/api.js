import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   headers: {
      "API-KEY": "89e89bfc-7b12-4723-8b41-dc273aa29321",
   },
});

export const usersAPI = {
   getUsers(curentPage, pageSize) {
      return instance
         .get(`users?page=${curentPage}&count=${pageSize}`)
         .then((response) => {
            return response.data;
         });
   },

   async followSuccess(userId) {
      const response = await instance.post(`follow/${userId}`)
      return response.data;
   
   },

   async unFollowSuccess(userId) {
      const response = await instance.delete(`follow/${userId}`)
      return response.data;
   },

   async setAuthUsers() {
      const response = await instance.get("auth/me")
      return response.data;
   },

   async login(email, password, rememberMe=false) {
      const response = await instance.post("auth/login", {email, password, rememberMe});
      return response.data
   },
   async logout() {
      const response = await instance.delete("auth/login");
      return response.data
   },

   async captcha() {
      const response = await instance.get("security/get-captcha-url")
      return response.data
   },
};

export const profileAPI = {
    async getProfile(profileId) {
      const response = await instance.get(`profile/${profileId}`);
      return response.data;
   },
    async getStatus(userId) {
      const response = await instance.get(`profile/status/${userId}`);
       return response.data;
   },
   async upDateStatus(status) {
      const response = await instance.put(`profile/status/`, { status: status });
      return response.data;
   },
   async savePhoto(photo) {
      const formData = new FormData();
      formData.append("image", photo);
      const response = await instance.put(`profile/photo/`, formData, { "Content-Type": "multipart/form-data" },);
      return response.data;
   }
}

export const NewsAPI = {
   async getNews() {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=dc483c3c18ed49168977337a58a3b8f5`)
      return response.data;
   },
}

export const securityAPI = {
   async getCaptchaUrl() {
      const response = await axios.get(`security/get-captcha-url`)
      return response.data;
   },
}
