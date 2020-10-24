const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOGS_POST = 'ADD-DIALOGS-POST';
const UPDATE_DIALOGS_POST_TEXT = 'UPDATE-DIALOGS-POST-TEXT';



let store = {
  _state: {
    dialogsPage: {
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
      newPostText: "Standart value",
    },

    profilePage: {
      postsData: [
        { message: "Hello, how are you ?", likeCounts: "15" },
        { message: "It's my first post", likeCounts: "20" },
        { message: "Where i'am ?", likeCounts: "3" },
        { message: "Some post", likeCounts: "10" },
      ],
      newPostText: "Hello, man!",
    },

    friendsBlock: {
      friendsInfo: [
        { id: "1", name: "Sveta" },
        { id: "2", name: "Nikita" },
        { id: "3", name: "Dmitry" },
      ],
    },
  },
  _rerenderEntireTree() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        message: this._state.profilePage.newPostText,
        likeCounts: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === ADD_DIALOGS_POST){
      let newPost = {
        text: this._state.dialogsPage.newPostText,
      };
  
      this._state.dialogsPage.messagesData.push(newPost);
      this._state.dialogsPage.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_DIALOGS_POST_TEXT){
      this._state.dialogsPage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },

};



export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const postChangeActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addDialogsPostActionCreator = () => {
  return {type: ADD_DIALOGS_POST}
}

export const updateDialogsPostTextActionCreator = (text) => {
  return {type: UPDATE_DIALOGS_POST_TEXT, newText: text}
}


window.store = store;

export default store;


