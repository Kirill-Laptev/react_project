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
                isAuth: true  // Если пришли данные, то isAuth будет true
            }
        
        default:
        return state;
    }
}


export const setAuthUserData = (id, login, email) => {
    return{ type: SET_USER_DATA, data: {id, login, email} }
}



export const getAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth()
        .then((response) => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
    }
}

export default authReducer; 


