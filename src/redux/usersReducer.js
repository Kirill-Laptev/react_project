const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingInProgress: [],
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

        case TOGGLE_IS_LOADING : 
            return {
                ...state,
                isLoading: action.isLoading
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isLoading 
                ? [...state.followingInProgress, action.userID]
                : state.followingInProgress.filter(id => id != action.userID)  // Фильтрация вернет новую копию массива, 
                                                                               // поэтому не нужна деструктуризация state
            }
        
        default:
            return state;
    
    }
} 
    
 


export const follow = (userID) => {
    return {type: FOLLOW, userID}
}

export const unfollow = (userID) => {
    return {type: UNFOLLOW, userID}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
} 

export const setCurrentPage = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, currentPage: pageNumber}
}

export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount}
}

export const toggleIsLoading = (isLoading) => {
    return {type: TOGGLE_IS_LOADING, isLoading: isLoading}
}

export const toggleFollowingProgress = (isLoading, userID) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading: isLoading, userID: userID}
}

export default usersReducer;

