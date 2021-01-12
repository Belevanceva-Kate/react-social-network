const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 0},
        {id: 2, message: 'It`s my first post', likesCount: 20},
    ],
    newPostContent: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let item = {
                id: 3,
                message: state.newPostContent,
                likesCount: 0,
            };
            state.posts.push(item);
            state.newPostContent = '';
            return state;
        case UPDATE_NEW_POST_CONTENT:
            state.newPostContent = action.postContent;
            return state;
        default:
            return state;
    }
}

export const actionCreatorAddPost = () =>
    ({ type: ADD_POST });

export const actionCreatorUpdateNewPostContent = (text) =>
    ({ type: UPDATE_NEW_POST_CONTENT, postContent: text })

export default profileReducer;