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
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
}

export const setUsers = (users) =>
    ({ type: SET_USERS, users });

export const setCurrentPage = (page) =>
    ({ type: SET_CURRENT_PAGE, page });

export const setTotalCount = (count) =>
    ({ type: SET_TOTAL_COUNT, count });

export const follow = (userId) =>
    ({ type: FOLLOW, userId });

export const unfollow = (userId) =>
    ({ type: UNFOLLOW, userId });

export const toggleIsFetching = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingInProgress = (isFollowingInProgress, userId) =>
    ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });

export default usersReducer;