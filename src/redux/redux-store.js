import { combineReducers, createStore } from 'redux';
import authReducer from './reducers/auth';
import profileReducer from './reducers/profile';
import dialogsReducer from './reducers/dialogs';
import sidebarReducer from './reducers/sidebar';
import usersReducer from './reducers/users';

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;