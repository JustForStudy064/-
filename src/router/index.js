import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: "home",
      component: resolve => require(['@/views/home/Home'], resolve),
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/login/Login'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/views/register/Register'], resolve),
    },
    {
      path: '/popular',
      name: 'popular',
      component: resolve => require(['@/views/popular/Popular'], resolve),
    },
    {
      path: '/history',
      name: 'history',
      component: resolve => require(['@/views/history/History'], resolve),
    },
    {
      path: '/collect',
      name: 'collect',
      component: resolve => require(['@/views/collect/Collect'], resolve),
    },
    {
      path: '/message',
      name: 'message',
      component: resolve => require(['@/views/message/Message'], resolve),
    },
    {
      path: '/log',
      name: 'Log',
      component: resolve => require(['@/views/log/Log'], resolve),
    },
    {
      path: '/demand',
      name: 'Demand',
      component: resolve => require(['@/views/demand/Demand'], resolve),
    }
  ],
  mode:"history",
})
