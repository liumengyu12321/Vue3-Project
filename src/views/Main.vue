<script setup>
import Aside from '../components/aside.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
        <Aside></Aside>
        <el-container>
            <el-header class="el-header">
              <Header></Header>
            </el-header>
            <el-main class="right-main">
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout,.lay-container{
    height: 100%;
}
.el-header{
    background-color: #333;
}
</style>