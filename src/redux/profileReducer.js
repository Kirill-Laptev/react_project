import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  postsData: [
    { message: "Hello, how are you ?", likeCounts: "15" },
    { message: "It's my first post", likeCounts: "20" },
    { message: "Where i'am ?", likeCounts: "3" },
    { message: "Some post", likeCounts: "10" },
  ],
  newPostText: "Hello, man!",
  userProfile: null,
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 

    let newPost = {
      message: state.newPostText,
      likeCounts: 0,
    };

    return {
      ...state,
      postsData: [...state.postsData, newPost],
      newPostText: '',
    }
    
    
    case UPDATE_NEW_POST_TEXT:

      return {
        ...state,
        newPostText: action.newText,
      }

      case SET_USER_PROFILE: 
      return {
        ...state,
        userProfile: action.userProfile,
      }
      
    default:
      return state;
  }
};



export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const postChangeActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
}; 

export const setUserProfile = (userProfile) => {
  return {type: SET_USER_PROFILE, userProfile: userProfile}
}



export const getProfileThunkCreator = (userID) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userID)   
    .then((response) => {
      dispatch(setUserProfile(response.data))
    }) 
  }
}

export default profileReducer;