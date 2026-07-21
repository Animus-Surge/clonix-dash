import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// Main pages
import Main from '@/components/page/Main.vue'
import Devices from '@/components/page/Devices.vue'
import Manifests from '@/components/page/Manifests.vue'
import Settings from '@/components/page/Settings.vue'

// Dynamic pages
import Device from '@/components/page/Device.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/devices',
    name: 'devices',
    component: Devices
  },
  {
    path: '/manifests',
    name: 'manifests',
    component: Manifests
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/devices/:device',
    name: 'device-info',
    component: Device
  }
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
