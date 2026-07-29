import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { Pages } from '@/composables/pages'

const routes: RouteRecordRaw[] = Pages

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
