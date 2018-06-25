import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vicars from '@/components/Vicars'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vicars',
      name: 'Vicars',
      component: Vicars
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
