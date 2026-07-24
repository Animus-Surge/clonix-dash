import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Main pages
import Main from '@/components/page/Main.vue'
import Devices from '@/components/page/Devices.vue'
import Logs from '@/components/page/Logs.vue'
import Users from '@/components/page/Users.vue'
// import Units from '@/components/page/Unit.vue'
// import Messages from '@/components/page/Messages.vue'

// Dynamic pages
import Device from '@/components/page/Device.vue'
// import User from '@/components/page/User.vue'
// import Unit from '@/components/page/Unit.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Main
  },

  // Device routes
  {
    path: '/devices',
    name: 'devices',
    component: Devices
  },
  {
    path: '/devices/:device',
    name: 'device-info',
    component: Device
  },

  // Logs
  {
    path: '/logs',
    name: 'logs',
    component: Logs
  }

  // Units

  // Users

  // Messages

  // Settings
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
