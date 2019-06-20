import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Residents from './views/Residents.vue'
import Devices from './views/Devices.vue'
import Settings from './views/Settings.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/residents',
      name: 'residents',
      component: Residents
    },
    {
      path: '/devices',
      name: 'devices',
      component: Devices
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
