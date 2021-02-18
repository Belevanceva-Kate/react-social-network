import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0';
const apiKey = '5b4ab0c6-f0f2-4e8e-afd1-f0b14d3bbc25';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // подтверждаем, что хотим для кроссдоменного запроса (с локал хоста на самурай) прикрепить куки
    withCredentials: true,
    headers: {
        'API-KEY': apiKey
    }
});


export const authAPI = {
    getAuthMe() {
        return instance.get(`${ baseUrl }/auth/me`)
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`${ baseUrl }/users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`${ baseUrl }/profile/` + userId)
            .then(response => response.data);
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`${ baseUrl }/follow/${ userId }`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`${ baseUrl }/follow/${ userId }`)
            .then(response => response.data);
    }
}



/*export const apiGetAuthMe = () => {
    return instance.get(`${ baseUrl }/auth/me`)
        .then(response => response.data);
}

export const apiGetUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`${ baseUrl }/users?page=${ currentPage }&count=${ pageSize }`)
        .then(response => response.data);
}

export const apiGetProfile = (userId) => {
    return instance.get(`${ baseUrl }/profile/` + userId)
        .then(response => response.data);
}

export const apiFollow = (userId) => {
    return instance.post(`${ baseUrl }/follow/${ userId }`)
        .then(response => response.data);
}

export const apiUnfollow = (userId) => {
    return instance.delete(`${ baseUrl }/follow/${ userId }`)
        .then(response => response.data);
}*/

