import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index/index'
import Management from '../pages/management/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
     	name: 'Index',
      	component: Index
    },
    {
    	path: '/manage',
    	name: 'Management',
    	component: Management
    }
  ]
})
