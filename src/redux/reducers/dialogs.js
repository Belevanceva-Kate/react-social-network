const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';

const dialogsReducer = (state, action) => {
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