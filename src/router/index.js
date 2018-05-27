import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LandingPage from '@/pages/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hellowolrd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ]
})
