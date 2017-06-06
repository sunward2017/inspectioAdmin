import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',	
  routes: [
    {
      path: '/login',
      component: Login,
      hidden: true//不显示在导航中
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
