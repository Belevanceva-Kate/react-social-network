const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

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
    newMessageContent: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let item = {
                id: 5,
                message: state.newMessageContent,
            }
            state.messages.push(item);
            state.newMessageContent = '';
            return state;
        case UPDATE_NEW_MESSAGE_CONTENT:
            state.newMessageContent = action.messageContent;
            return state;
        default:
            return state;
    }
}

export const actionCreatorAddMessage = () =>
    ({ type: ADD_MESSAGE });

export const actionCreatorUpdateNewMessageContent = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_CONTENT, messageContent: text });

export default dialogsReducer;