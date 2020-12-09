import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
            }
        
        default:
        return state;
    }
}


export const setAuthUserData = (id, login, email, isAuth) => {
    return{ type: SET_USER_DATA, data: {id, login, email, isAuth} }
}



export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
        .then((response) => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        })
    }
}

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
        .then((response) => {
            if(response.data.resultCode === 0){
                dispatch(getAuthUserDataThunkCreator())
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout()
        .then((response) => {
            if(response.data.resultCode === 0){
                dispatch(getAuthUserDataThunkCreator())
                dispatch(setAuthUserData(null, null, null, false)); 
            }
        })
    }
}

export default authReducer; 


