import Vue from 'vue'
import Router from 'vue-router'
import typeBox from '@/views/typeBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: typeBox
    }
  ]
})
