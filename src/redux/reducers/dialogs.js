const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let item = {
                id: 5,
                message: action.message,
            }
            return {
                ...state,
                messages: [ ...state.messages, item ]
            };
        }
        default:
            return state;
    }
}

export const actionCreatorAddMessage = (message) =>
    ({ type: ADD_MESSAGE, message });

export default dialogsReducer;