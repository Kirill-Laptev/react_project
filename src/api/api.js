import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "api-key": "1e60f3eb-a2f7-4f18-b8e9-f6ea4b15f04b"
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data; 
        }) 
    },
    unfollowRequest(userID){
        return instance.delete(`follow/${userID}`)
    },
    followRequest(userID){
        return instance.post(`follow/${userID}`);
    },
}



export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){ // По умолчанию чекбокс false
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    getUserProfile(userID){
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file){
        const formData = new FormData();
        formData.append('image', file)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    }
}