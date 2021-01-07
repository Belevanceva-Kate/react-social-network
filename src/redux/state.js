let state = {
	profile: {
		posts: [
			{ id: 1, message: 'Hi! How are you?i', likesCount: 0 },
			{ id: 2, message: 'It`s my first post', likesCount: 20 },
		],
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
		]
	},
	sidebar: {
		friends: [
			{ id: 1, name: 'Max', img: 'https://www.fakenamegenerator.com/images/sil-female.png' },
			{ id: 2, name: 'Andrey', img: 'https://www.fakenamegenerator.com/images/sil-male.png' },
			{ id: 3, name: 'Sveta', img: 'https://www.fakenamegenerator.com/images/sil-female.png' },
		]
	}
}

export default state;