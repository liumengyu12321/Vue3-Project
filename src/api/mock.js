import mock from 'mockjs'
import homeData from './mockData/homeData'
// 参数：拦截路径、方法、假数据
mock.mock('/api/home/getTableData','get',homeData.getTableData)
mock.mock('/api/home/getCountData','get',homeData.getCountData)
mock.mock('/api/home/getChartData','get',homeData.getChartData)
