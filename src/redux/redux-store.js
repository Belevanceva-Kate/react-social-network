import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/app';
import authReducer from './reducers/auth';
import profileReducer from './reducers/profile';
import dialogsReducer from './reducers/dialogs';
import sidebarReducer from './reducers/sidebar';
import usersReducer from './reducers/users';

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;