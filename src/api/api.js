import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
const apiKey = '5b4ab0c6-f0f2-4e8e-afd1-f0b14d3bbc25';

const instance = axios.create({
    baseURL: baseUrl,
    // подтверждаем, что хотим для кроссдоменного запроса (с локал хоста на самурай) прикрепить куки
    withCredentials: true,
    headers: {
        'API-KEY': apiKey
    }
});



export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(properties = {}) {
        return instance.post(`auth/login`, properties)
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
                status: status
            })
            .then(response => response.data);
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${ userId }`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${ userId }`)
            .then(response => response.data);
    }
}