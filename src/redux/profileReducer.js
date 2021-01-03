import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
// const FAKE = 'FAKE';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
  postsData: [
    { message: "Hello, how are you ?", likeCounts: "15" },
    { message: "It's my first post", likeCounts: "20" },
    { message: "Where i'am ?", likeCounts: "3" },
    { message: "Some post", likeCounts: "10" },
  ],
  newPostText: "Hello, man!",
  userProfile: null,
  status: '',
  fakeNum: 10,
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 

    let newPost = {
      message: action.newMessage,
      likeCounts: 0,
    };

    return {
      ...state,
      postsData: [...state.postsData, newPost],
    }
    

    case SET_USER_PROFILE: 
      return {
        ...state,
        userProfile: action.userProfile,
      }

    case SET_STATUS : 
      return {
        ...state,
        status: action.status,
      }
    
      // case FAKE: 
      // return {
      //   ...state,
      //   fakeNum: state.fakeNum + 1
      // }

      case DELETE_POST :
        return{
          ...state,
          postsData: state.postsData.filter(post => post.id !== action.postID)
        }
      
      case SAVE_PHOTO_SUCCESS :
        return {
          ...state,
          userProfile: {...state.userProfile, photos: action.photos}
        }
      
    default:
      return state;
  }
};



export const addPost = (newMessage) => {
  return {type: ADD_POST, newMessage};
};
 

export const setUserProfile = (userProfile) => {
  return {type: SET_USER_PROFILE, userProfile: userProfile}
}


export const setStatus = (status) => {
  return {type: SET_STATUS, status: status}
}


export const deletePost = (postID) => {
  return{type: 'DELETE_POST', postID}
}

export const savePhotoSuccess = (photos) => {
  return {type: SAVE_PHOTO_SUCCESS, photos}
}



export const getProfileThunkCreator = (userID) => {
  return async (dispatch) => {
    let response = await profileAPI.getUserProfile(userID)   
    
    dispatch(setUserProfile(response.data))
  }
}


export const getUserStatusTC = (userID) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userID)
    
    dispatch(setStatus(response.data))
  }
}

export const updateUserStatusTC = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if(response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
  }
} 


// export const fake = () => {
//   return {type: FAKE}
// }

export const savePhotoTC = (file) => {
  return (dispatch) => {
    profileAPI.savePhoto(file)
    .then((response) => {
       if(response.data.resultCode === 0){
         dispatch(savePhotoSuccess(response.data.data.photos))
       }
    }) 
  }
}


export default profileReducer;