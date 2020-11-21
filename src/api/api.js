import * as axios from 'axios';



const instance = axios.create({
    withCredentionals: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '703d93ac-128b-4f71-876e-6b9efb6e17bd'
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
              'API-KEY': '703d93ac-128b-4f71-876e-6b9efb6e17bd'
            }});
    },
    followRequest(link, userID){
        return axios.post(`https://social-network.samuraijs.com/api/1.0/${link}${userID}`, {}, {
            withCredentials: true, 
            headers: {
              'API-KEY': '703d93ac-128b-4f71-876e-6b9efb6e17bd'
            }});
    }
}
