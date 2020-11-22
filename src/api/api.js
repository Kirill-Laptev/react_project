import * as axios from 'axios';



const instance = axios.create({
    withCredentionals: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '1e60f3eb-a2f7-4f18-b8e9-f6ea4b15f04b'
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data; 
        }) 
    },
    unfollowRequest(link, userID){
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/${link}${userID}`,{
        withCredentials: true, 
            headers: {
              'API-KEY': '1e60f3eb-a2f7-4f18-b8e9-f6ea4b15f04b'
            }});
    },
    followRequest(link, userID){
        return axios.post(`https://social-network.samuraijs.com/api/1.0/${link}${userID}`, {}, {
            withCredentials: true, 
            headers: {
              'API-KEY': '1e60f3eb-a2f7-4f18-b8e9-f6ea4b15f04b'
            }});
    }
}
