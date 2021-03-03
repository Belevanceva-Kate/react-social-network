// import { createSelector } from 'reselect';

export const getUsers = (state) => {
    return state.users.users;
}

// export const getUsersSelector = (state) => {
//     return getUsers(state).filter(u => true);
// }
//
// export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
//     return users.filter(u => true);
// });

export const getPageSize = (state) => {
    return state.users.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.users.totalCount;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress;
}