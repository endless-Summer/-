import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome'
import Users from '@/components/menus/MyUsers'
import Goods from '@/components/menus/MyGoods'
import Settings from '@/components/menus/MySettings'
import Orders from '@/components/menus/MyOrders'
import Rights from '@/components/menus/MyRights'
import pathArr from '@/router/pathArr'
import Detailsers from '@/components/user/MyUserDetail.vue'



Vue.use(VueRouter)

const router=new VueRouter({
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',
    component:Home,
    redirect:'/home/users',
    children:[
      {path:'users',component:Users},
      {path:'right',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',components:Settings},

      {path:'userinfo/:id',component:Detailsers,props:true}
    ]}
  ]
})

router.beforeEach(function (to,from,next) {
  
  if(pathArr.indexOf(to.path) !== -1){
    const token=localStorage.getItem('token')
    if(token){
      next()
    }else {
      next('/login')
    }
  }else{
    next()
  }
  })
export default  router