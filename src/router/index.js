import Vue from 'vue'
import Router from 'vue-router'
import front from '@/pages/front'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front',
      component: front
    }
  ]
})
