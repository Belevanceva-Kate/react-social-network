let initialState = {
    friends: [
        {id: 1, name: 'Max', img: 'https://www.fakenamegenerator.com/images/sil-female.png'},
        {id: 2, name: 'Andrey', img: 'https://www.fakenamegenerator.com/images/sil-male.png'},
        {id: 3, name: 'Sveta', img: 'https://www.fakenamegenerator.com/images/sil-female.png'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;