import * as axios from 'axios';



const instance = axios.create({
    withCredentionals: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      'API-KEY': '2c25ddf9-0550-4467-a44b-abb06d695935'
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then((response) => {
            return response.data; 
        }) 
    }  
}

 
