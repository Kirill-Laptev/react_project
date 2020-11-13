const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    usersData: [
         
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            usersData: action.users,
        
        }    

        case SET_CURRENT_PAGE :
            return{
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS_COUNT : 
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
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

export const setCurrentPageAC = (pageNumber) => {
    return {type: 'SET_CURRENT_PAGE', currentPage: pageNumber}
}

export const setTotalUsersCountAC = (totalCount) => {
    return {type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: totalCount}
}

export default usersReducer;

