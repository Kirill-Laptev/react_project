const ADD_DIALOGS_POST = 'ADD-DIALOGS-POST';

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
};



const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {

    case ADD_DIALOGS_POST: 

    return {
      ...state,
      messagesData: [...state.messagesData, {text: action.newMessage}],  

    }

    default:
      return state;
  }
};



export const addDialogsPost = (newMessage) => {
  return {type: ADD_DIALOGS_POST, newMessage}
}


export default dialogsReducer;