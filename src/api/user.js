import request from '@/utils/request'

export const login = (userName, password) => {
    return request({
        url: '/user/Login',
        method: 'post',
        data: {userName, password},
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post',
    })
}

export function register(data){
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}
