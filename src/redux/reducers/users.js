import { followAPI, usersAPI } from '../../api/api';

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            // изначально юзеры пустые. далее с сервера получаем ответ и заполняем стейт
            // склеиваем 2 массива: те, которые были в стейте, и те, которые были в экшене
            // return { ...state, users: [ ...state.users, ...action.users ] };

            // перезатираем юзеров. чтобы при пагинаци не дублировалось и не склеивалось друг поддругом
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page };
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.count };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [ ...state.followingInProgress, action.userId ]
                    // фильтрация вернет нам новый массив, деструктуриз. не нужна
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

/* Action Creators */

export const setUsers = (users) =>
    ({ type: SET_USERS, users });

export const setCurrentPage = (page) =>
    ({ type: SET_CURRENT_PAGE, page });

export const setTotalCount = (count) =>
    ({ type: SET_TOTAL_COUNT, count });

export const followUser = (userId) =>
    ({ type: FOLLOW, userId });

export const unfollowUser = (userId) =>
    ({ type: UNFOLLOW, userId });

export const toggleIsFetching = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingInProgress = (isFollowingInProgress, userId) =>
    ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });

/* Thunk Creators */

export const requestUsers = (page, pageSize) => {
    // возвращаем thunk. замыкание
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        followAPI.follow(userId)
            .then(data => {
                // сервер подтвердил, что подписка произошла
                if (data.resultCode === 0) {
                    dispatch(followUser(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        followAPI.unfollow(userId)
            .then(data => {
                // сервер подтвердил, что подписка произошла
                if (data.resultCode === 0) {
                    dispatch(unfollowUser(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}

export default usersReducer;