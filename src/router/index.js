import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '日志',
      icon: 'book',
      component: Home,
      hidden: false,
    },
    {
      path: '/:id',
      name: '文章',
      icon: 'book',
      component: Home,
      hidden: true,
    },
    {
      path: '/about',
      name: '关于',
      component: About,
      hidden: true,
    }
  ]
})
