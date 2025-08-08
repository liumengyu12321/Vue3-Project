import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/api/mock.js'
import { useAllDataStore } from './stores'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createPinia} from 'pinia'
const pinia = createPinia()

//路由守卫
function isRoute(to){
   return router.getRoutes().filter(item=>item.path===to.path).length>0
}
router.beforeEach((to, from) => {
     //如果要跳转的不是login,且token不存在(可以通过不存在token判断出用户未登录)
    const store = useAllDataStore();
    if(to.path !== '/login' && !store.token){
        //跳转到login
        return { name: 'login' }
    }
    //如果路由记录不存在
    if(!isRoute(to)){
        //跳转到404界面
        return {name: "404"}
    }
})

const app = createApp(App)
app.use(ElementPlus).use(pinia).use(router).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
