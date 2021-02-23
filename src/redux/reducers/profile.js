import { profileAPI } from '../../api/api';

const SET_PROFILE = 'SET-PROFILE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CONTENT = 'UPDATE-NEW-POST-CONTENT';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 0},
        {id: 2, message: 'It`s my first post', likesCount: 20},
    ],
    newPostContent: '',
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case ADD_POST: {
            let item = {
                id: 3,
                message: state.newPostContent,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [ ...state.posts, item ],
                newPostContent: ''
            }
        }
        case UPDATE_NEW_POST_CONTENT: {
            return {
                ...state,
                newPostContent: action.postContent
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

/* Action Creators */

export const setProfile = (profile) =>
    ({ type: SET_PROFILE, profile });

export const actionCreatorAddPost = () =>
    ({ type: ADD_POST });

export const actionCreatorUpdateNewPostContent = (text) =>
    ({ type: UPDATE_NEW_POST_CONTENT, postContent: text })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status });

/* Thunk Creators */

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;