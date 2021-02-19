import { authAPI, profileAPI } from '../../api/api';

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    avatar: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            // деструктуризация объекта action.data. склеиваем из 2х объектов один
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

// export const setAuthData = (data) =>
//     ({ type: SET_USER_DATA, data });

export const setAuthData = (userId, email, login) =>
    ({ type: SET_AUTH_DATA, data: { userId, email, login } });

export const setUserData = (avatar) =>
    ({ type: SET_USER_DATA, data: { avatar } });

export const getAuthData = () => (dispatch) => {
    authAPI.getAuthMe()
        .then((data) => {
            // 0 - success, other number - error
            if (data.resultCode === 0) {
                let { id: userId, email, login } = data.data;
                dispatch(setAuthData(userId, email, login));

                profileAPI.getProfile(userId)
                    .then((data) => {
                        dispatch(setUserData(data.photos.small));
                    });
            }
        });
}

export default authReducer;