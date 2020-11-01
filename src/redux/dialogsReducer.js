const ADD_DIALOGS_POST = 'ADD-DIALOGS-POST';
const UPDATE_DIALOGS_POST_TEXT = 'UPDATE-DIALOGS-POST-TEXT';

let initialState = {
  dialogsData: [
    { id: "1", name: "Sveta" },
    { id: "2", name: "Nikita" },
    { id: "3", name: "Dmitry" },
    { id: "4", name: "Nikolay" },
    { id: "5", name: "Fedor" },
    { id: "6", name: "Natasha" },
  ],
  messagesData: [
    { text: "Hi" },
    { text: "How are you ?" },
    { text: "Yo" },
    { text: "Yo" },
    { text: "Yo" },
    { text: "Yo" },
  ],
  newPostText: "Hello",
};



const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {

    case UPDATE_DIALOGS_POST_TEXT:   

      return {
        ...state,
        newPostText: action.newText
      };

    case ADD_DIALOGS_POST: 

    let newPost = state.newPostText;

    return {
      ...state,
      newPostText: '',
      messagesData: [...state.messagesData, {text: newPost}],  

    }


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