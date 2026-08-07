// Devices View - Dynamic `/devices` page handling store

import { defineStore } from 'pinia'

import { computed, ref } from 'vue'

export const useDeviceViewStore = defineStore('deviceView', () => {
  let devicesList = ref([])

  

  return { devicesList }
})