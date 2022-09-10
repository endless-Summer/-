import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home.vue'
// import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //component: Home
      //懒加载1：
      component: () => import('@/components/Home')
    },
    {
      path: '/login',
      name: 'login',
      //component: Login
       //懒加载2：
     /* eslint-disable */
      component: resolve => require((['@/components/Login']),resolve)
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'

})
