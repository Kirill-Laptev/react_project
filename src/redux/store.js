import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._rerenderEntireTree(this.state);
 
  },

};






window.store = store;

export default store;


