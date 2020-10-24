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

  addDialogsPost(postMessage) {
    let newPost = {
      text: postMessage,
    };

    this._state.dialogsPage.messagesData.push(newPost);
    this._rerenderEntireTree(this._state);
  },

  updateDialogsPostText(newText) {
    this._state.dialogsPage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        message: this._state.profilePage.newPostText,
        likeCounts: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);

    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};

window.store = store;

export default store;


