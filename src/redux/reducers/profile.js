import { profileAPI } from '../../api/api';

const SET_PROFILE = 'SET-PROFILE';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 0},
        {id: 2, message: 'It`s my first post', likesCount: 20},
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case ADD_POST: {
            let item = {
                id: 3,
                message: action.post,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [ ...state.posts, item ],
                newPostContent: ''
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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

export const actionCreatorAddPost = (post) =>
    ({ type: ADD_POST, post });

export const actionCreatorDeletePost = (postId) =>
    ({ type: DELETE_POST, postId });

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