import {authAPI, profileAPI, securityAPI} from '../../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_DATA = 'network/auth/SET-AUTH-DATA';
const SET_USER_DATA = 'network/auth/SET-USER-DATA';
const SET_CAPTCHA_URL = 'network/auth/GET-CAPTCHA-URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    avatar: null,
    // if captchaUrl - null, then captcha is not required
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            // деструктуризация объекта action.data. склеиваем из 2х объектов один
            return {
                ...state,
                ...action.data
            }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login, isAuth) =>
    ({ type: SET_AUTH_DATA, data: { userId, email, login, isAuth } });

export const setUserData = (avatar) =>
    ({ type: SET_USER_DATA, data: { avatar } });

export const setCaptchaUrl = (captchaUrl) =>
    ({ type: SET_CAPTCHA_URL, data: { captchaUrl } });

/*export const getAuthData = () => async (dispatch) => {
    let data = authAPI.getAuthMe();

    // 0 - success, other number - error
    if (data.resultCode === 0) {
        let { id: userId, email, login } = data.data;
        dispatch(setAuthData(userId, email, login, true));

        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserData(data.photos.small));
            });
    }
}*/

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(getAuthData());
    }
    else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = data.messages.length > 0 ? data.messages[0] : 'Error';
        dispatch(stopSubmit('login', { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    let captcha = data.url;

    dispatch(setCaptchaUrl(captcha));
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}

export const getAuthData = () => (dispatch) => {
    return authAPI.getAuthMe()
        .then((data) => {
            // 0 - success, other number - error
            if (data.resultCode === 0) {
                let { id: userId, email, login } = data.data;
                dispatch(setAuthData(userId, email, login, true));

                profileAPI.getProfile(userId)
                    .then((data) => {
                        dispatch(setUserData(data.photos.small));
                    });
            }
        });
}

/*export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(getAuthData());
            }
            else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Error';
                dispatch(stopSubmit('login', { _error: message }));
            }
        });
}*/

/*export const logout = () => (dispatch) => {
    authAPI.logout()
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false));
            }
        });
}*/

export default authReducer;