const ADD_DIALOGS_POST = 'ADD-DIALOGS-POST';
const UPDATE_DIALOGS_POST_TEXT = 'UPDATE-DIALOGS-POST-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_DIALOGS_POST:
      let newPost = {
        text: state.newPostText,
      };

      state.messagesData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_DIALOGS_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};



export const addDialogsPostActionCreator = () => {
  return {type: ADD_DIALOGS_POST}
}

export const updateDialogsPostTextActionCreator = (text) => {
  return {type: UPDATE_DIALOGS_POST_TEXT, newText: text}
}



export default dialogsReducer;