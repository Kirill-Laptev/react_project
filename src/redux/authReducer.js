import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
            }

        case GET_CAPTCHA_URL :
            return {
                ...state,
                captchaUrl: action.url
            }
        
        default:
        return state;
    }
}


export const setAuthUserData = (id, login, email, isAuth) => {
    return{ type: SET_USER_DATA, data: {id, login, email, isAuth} }
}

export const getCaptchaUrlSuccess = (url) => {
    return {type: GET_CAPTCHA_URL, url}
}




export const getAuthUserDataThunkCreator = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuth();
        
        if(response.data.resultCode === 0){
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export const loginTC = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        
        if(response.data.resultCode === 0){
            dispatch(getAuthUserDataThunkCreator())
        } else{
            if(response.data.resultCode === 10){
                dispatch(getCaptchaUrlTC())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logoutTC = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        
            if(response.data.resultCode === 0){
                dispatch(getAuthUserDataThunkCreator())
                dispatch(setAuthUserData(null, null, null, false)); 
            }
    }
}


export const getCaptchaUrlTC = () => {
    return (dispatch) => {
        securityAPI.getCaptchaUrl()
        .then((response) => {
            dispatch(getCaptchaUrlSuccess(response.data.url))
        })
    }
}

export default authReducer; 


