const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    usersData: [
         
    ]
};



const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
        
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if(user.id === action.userID){
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
            
        case UNFOLLOW :
            
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if(user.id === action.userID){
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }

        case SET_USERS :
            
        return {
            ...state,
            usersData: [...state.usersData, ...action.users],
        
        }    
        
        default:
            return state;
    
    }
} 
    
 


export const followAC = (userID) => {
    return {type: 'FOLLOW', userID}
}

export const unfollowAC = (userID) => {
    return {type: 'UNFOLLOW', userID}
}

export const setUsersAC = (users) => {
    return {type: 'SET-USERS', users}
}




export default usersReducer;

