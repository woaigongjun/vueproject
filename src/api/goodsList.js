import request from '@/utils/request'

export const goodsList = (params) => {
    return request({
        url: '/goods/getList',
        method: 'get',
        params
    })
}

export function getDetail(query) {
    return request({
        url: '/goods/getDetail',
        method: 'get',
        query: query,
        params: query
    })
}

