import request from './request'

export const getTableData = () => {
    return request({
        url:'/api/home/getTableData',
        method:'get',
    })
}

export const getCountData = () => {
    return request({
        url:'/api/home/getCountData',
        method:'get'
    })
}

export const getChartData = () => {
    return request({
        url:'/api/home/getChartData',
        method:'get'
    })
}

export const getUserData = (data) => {
    return request({
        url:'/api/home/getUserData',
        method:'get',
        data
    })
}

export const getMenu = (params) => {
    return request({
        url:'/api/permission/getMenu',
        method:'get',
        data:params
    })
}