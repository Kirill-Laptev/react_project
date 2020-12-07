import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
const { createStore, combineReducers, applyMiddleware } = require("redux");




let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage : profileReducer,
    friendsBlock : friendsReducer,
    usersPage : usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;