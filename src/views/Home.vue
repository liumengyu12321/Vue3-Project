<script setup>
import { ref, reactive } from 'vue'
import { getTableData, getCountData, getChartData } from '@/api/requests.js'
import * as echarts from 'echarts'

const getImageUrl = (user)=>{
    return new URL(`../assets/images/${user}.png`,import.meta.url).href
}

const tableData = ref([])
const tableLabel = ref({
    name: "商品",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})
const countData = ref([])
const chartData = ref([])

getTableData().then(res=>{
  tableData.value = res.data.tableData
})

getCountData().then(res=>{
  countData.value = res.data.countData
})

getChartData().then(res=>{
  chartData.value = res.data
  xOptions.xAxis.data = chartData.value.orderData.date
  xOptions.series = Object.keys(chartData.value.orderData.data[0]).map(val=>{
    return{
      name:val,
      data:chartData.value.orderData.data.map(item=>item[val]),
      type:'line'
    }
  })
  const xChart = echarts.init(document.getElementById('xChart'));
  xChart.setOption(xOptions)
})

const xOptions = reactive({
      // 图例文字颜色
      textStyle: {
        color: "#333",
      },
      legend: {},
      grid: {
        left: "20%",
      },
      // 提示框
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category", // 类目轴
        data: [],
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#333",
        },
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
      ],
      color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
      series: [],
})

const pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  legend: {},
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: []
})
</script>

<template>
  <el-row class="homeLayout" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover"> 
        <div class="user">
          <img :src="getImageUrl('user')" class="userImage"/>
          <div class="userInfo">
            <p class="p-admin">admin</p>
            <p>超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2025-06-30</span></p>
          <p>上次登录地点：<span>中国</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" class="user-table"> 
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val" :key="key"/>
        </el-table>
      </el-card>
    </el-col>
    
    <el-col :span="16">
      <div class="count">
        <el-card :body-style="{display:'flex', padding:0}" v-for="item in countData" :key="item.name">
          <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
       </el-card>
      </div>

      <el-card class="xEcharts">
        <div id="xChart" style="height: 275px;"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
  .homeLayout{
    height: 100%;
    overflow: hidden;
    // margin-top: 20px;
    .user{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      padding-bottom: 20px;
      img{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin-right: 40px;
      }
      .userInfo{
        p{
          line-height: 40px;
        }
        .p-admin{
          font-size: 35px;
        }
      }
    }
    .login-info{
      p{
        line-height: 30px;
        font-size: 14px;
        color: #999;
        span{
          color: #666;
          margin-left: 60px;
        }
      }
    }
    .user-table{
      margin-top: 15px;
    }
    .count{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .el-card{
        width: 32%;
        margin-bottom: 15px;
      }
      .icons{
        width: 80px;
        height: 80px;
        line-height: 80px;
        color: #fff;
      }
      .detail{
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .num{
          font-size: 25px;
          margin-bottom: 10px;
        }
        .txt{
          font-size: 15px;
          color: #999;
          // font-weight: bold;
        }
      }
    }
  }
</style>
