import request from './request'

export const getTableData = () => {
    return request({
        url:'/api/home/getTableData',
        method:'get'
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