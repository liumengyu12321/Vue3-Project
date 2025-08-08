<script setup>
import { reactive } from 'vue';
import { getMenu } from '../api/requests';
import {useAllDataStore} from '../stores'
import router from '../router';
const loginForm = reactive({
    username:'',
    password:'',
})
let store = useAllDataStore();
const login = () => {
    getMenu(loginForm).then(res=>{
        store.menuList = res.data.data.menuList
        store.token = res.data.data.token
        router.push('/home')
    })
}
</script>

<template>
    <div class="login-body">
        <el-form :model="loginForm" class="login-container">
            <h3>系统登录</h3>
                
            <el-form-item>
                <el-input
                type="input"
                placeholder="请输入账号"
                v-model="loginForm.username"
                >
                </el-input>
            </el-form-item>
                
            <el-form-item>
                <el-input
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
                >
                </el-input>
            </el-form-item>
                
            <el-form-item>
                <el-button type="primary" @click="login"> 登录 </el-button>
            </el-form-item>
                
            </el-form>
    </div>
</template>

<style scoped>
.login-body{
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/background.jpg');
    background-size: 100%;
    overflow: hidden;
}
.login-container {
  width: 300px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>