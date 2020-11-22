import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
const { createStore, combineReducers, applyMiddleware } = require("redux");




let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    friendsBlock : friendsReducer,
    usersPage : usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;