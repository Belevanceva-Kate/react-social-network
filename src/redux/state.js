import { rerenderEntireTree } from '../render';

let state = {
	profile: {
		posts: [
			{ id: 1, message: 'Hi! How are you?', likesCount: 0 },
			{ id: 2, message: 'It`s my first post', likesCount: 20 },
		],
		newPostContent: '',
	},
	dialogs: {
		dialogs: [
			{ id: 1, name: 'Dima' },
			{ id: 2, name: 'Andrey' },
			{ id: 3, name: 'Sveta' },
			{ id: 4, name: 'Sasha' },
			{ id: 5, name: 'Viktor' },
			{ id: 6, name: 'Valera' },
		],
		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'How is your day?' },
			{ id: 4, message: 'Yo' },
		],
		newMessageContent: 'test',
	},
	sidebar: {
		friends: [
			{ id: 1, name: 'Max', img: 'https://www.fakenamegenerator.com/images/sil-female.png' },
			{ id: 2, name: 'Andrey', img: 'https://www.fakenamegenerator.com/images/sil-male.png' },
			{ id: 3, name: 'Sveta', img: 'https://www.fakenamegenerator.com/images/sil-female.png' },
		]
	}
}

export let addPost = () => {
	let item = {
		id: 3, 
		message: state.profile.newPostContent, 
		likesCount: 0,
	};
	state.profile.posts.push(item);
	state.profile.newPostContent = '';
	rerenderEntireTree(state);
};

/*export let addPost = (postContent) => {
	let item = {
		id: 3, 
		message: postContent, 
		likesCount: 0,
	};
	state.profile.posts.push(item);
	rerenderEntireTree(state);
};*/

export let updateNewPostContent = (postContent) => {
	state.profile.newPostContent = postContent;
	rerenderEntireTree(state);
};

export let addMessage = () => {
	let item = {
		id: 5, 
		message: state.dialogs.newMessageContent,
	}
	state.dialogs.messages.push(item);
	state.dialogs.newMessageContent = '';
	rerenderEntireTree(state);
}

export let updateNewMessageContent = (messageContent) => {
	state.dialogs.newMessageContent = messageContent;
	rerenderEntireTree(state);
}

export default state;