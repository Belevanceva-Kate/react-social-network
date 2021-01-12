import profileReducer from './reducers/profile';
import dialogsReducer from './reducers/dialogs';
import sidebarReducer from './reducers/sidebar';

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 0},
                {id: 2, message: 'It`s my first post', likesCount: 20},
            ],
            newPostContent: '',
        },
        dialogs: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'How is your day?'},
                {id: 4, message: 'Yo'},
            ],
            newMessageContent: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Max', img: 'https://www.fakenamegenerator.com/images/sil-female.png'},
                {id: 2, name: 'Andrey', img: 'https://www.fakenamegenerator.com/images/sil-male.png'},
                {id: 3, name: 'Sveta', img: 'https://www.fakenamegenerator.com/images/sil-female.png'},
            ]
        },
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

	dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
	},
}

export default store;