// Notifications store

import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Notification {
  id: number
  title: string
  message: string
  type: string
}

export const useNotificationsStore = defineStore('notifications', () => {
  const notifs = ref<Notification[]>([])

  const dismiss = (id: number) => {
    notifs.value = notifs.value.filter(notif => notif.id != id)
  }

  const add = (notif: Omit<Notification, 'id'>) => {
    const id = Date.now()
    notifs.value.push({ id, ...notif })
  }

  return {notifs, dismiss, add}
})