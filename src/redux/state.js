const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

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
		if (action.type === ADD_POST) {
			let item = {
				id: 3,
				message: this._state.profile.newPostContent,
				likesCount: 0,
			};
			this._state.profile.posts.push(item);
			this._state.profile.newPostContent = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_CONTENT) {
			this._state.profile.newPostContent = action.postContent;
			this._callSubscriber(this._state);
		}
		else if (action.type === ADD_MESSAGE) {
			let item = {
				id: 5,
				message: this._state.dialogs.newMessageContent,
			}
			this._state.dialogs.messages.push(item);
			this._state.dialogs.newMessageContent = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_CONTENT) {
			this._state.dialogs.newMessageContent = action.messageContent;
			this._callSubscriber(this._state);
		}
	},

    /*addPost() {
        let item = {
            id: 3,
            message: this._state.profile.newPostContent,
            likesCount: 0,
        };
        this._state.profile.posts.push(item);
        this._state.profile.newPostContent = '';
        this._callSubscriber(this._state);
    },
    updateNewPostContent(postContent) {
        this._state.profile.newPostContent = postContent;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let item = {
            id: 5,
            message: this._state.dialogs.newMessageContent,
        }
        this._state.dialogs.messages.push(item);
        this._state.dialogs.newMessageContent = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageContent(messageContent) {
        this._state.dialogs.newMessageContent = messageContent;
        this._callSubscriber(this._state);
    },*/
}


export const actionCreatorAddPost = () =>
    ({ type: ADD_POST });

export const actionCreatorUpdateNewPostContent = (text) =>
    ({ type: UPDATE_NEW_POST_CONTENT, postContent: text })

export const actionCreatorAddMessage = () =>
    ({ type: ADD_MESSAGE });

export const actionCreatorUpdateNewMessageContent = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_CONTENT, messageContent: text });

export default store;