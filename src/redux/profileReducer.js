const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  postsData: [
    { message: "Hello, how are you ?", likeCounts: "15" },
    { message: "It's my first post", likeCounts: "20" },
    { message: "Where i'am ?", likeCounts: "3" },
    { message: "Some post", likeCounts: "10" },
  ],
  newPostText: "Hello, man!",
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likeCounts: 0,
      };

      let stateCopy = {...state};

      stateCopy.postsData = [...state.postsData]
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = {...state};

      stateCopy.newPostText = action.newText;
      return stateCopy;

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



export default profileReducer;