const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        /*{ id: 1, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Dima', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
        { id: 2, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Andrey', status: 'I am a boss too', location: { country: 'Russia', city: 'Moscow' }, followed: false },
        { id: 3, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Sveta', status: 'I am a boss too', location: { country: 'Kyiv', city: 'Ukraine' }, followed: true },
        { id: 4, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Sasha', status: 'I like football', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
        { id: 5, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Viktor', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: true },
        { id: 6, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Valera', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },
        { id: 7, img:'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png', fullName: 'Alex', status: 'I am a boss', location: { country: 'Belarus', city: 'Minsk' }, followed: false },*/
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            // изначально юзеры пустые. далее с сервера получаем ответ и заполняем стейт
            // склеиваем 2 массива: те, которые были в стейте, и те, которые были в экшене
            return { ...state, users: [ ...state.users, ...action.users ] };
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
        default:
            return state;
    }
}

export const actionCreatorSetUsers = (users) =>
    ({ type: SET_USERS, users });

export const actionCreatorFollow = (userId) =>
    ({ type: FOLLOW, userId });

export const actionCreatorUnfollow = (userId) =>
    ({ type: UNFOLLOW, userId });

export default usersReducer;