import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home')
    },
    {
      path: '/device',
      component: () => import('../pages/Devices'),
      children: [
        {
          path: '',
          name: 'Devices',
          component: () => import('../components/DeviceListPanel')
        },
        {
          path: 'create',
          component: () => import('../components/DeviceCreatePanel')
        },
        {
          path: 'insertData',
          component: () => import('../components/DeviceInsertDataPanel')
        }
      ]
    }
  ]
})
