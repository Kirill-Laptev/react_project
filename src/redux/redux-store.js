import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
const { createStore, combineReducers } = require("redux");



let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    friendsBlock : friendsReducer,
    usersPage : usersReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;