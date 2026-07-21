import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/composables/api'

export interface Device {
  serial: string
  hostname: string
  unit: string
  provisionDate: string
  lastCheckIn: string
  tooltip: string | false
}

export const useDevicesStore = defineStore('devices', () => {
  const devices = ref<Device[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const mockDevices: Device[] = [
    { serial: 'JK7F9R3', hostname: 'zeus', unit: 'Unit 1', provisionDate: '2026-07-15', lastCheckIn: '2026-07-20 14:32:05 UTC', tooltip: false },
    { serial: 'PF-3K4M2X', hostname: 'poseidon', unit: 'Unit 2', provisionDate: '2026-07-10', lastCheckIn: '2026-07-18 09:15:42 UTC', tooltip: 'High memory usage' },
    { serial: 'H7G2K4T', hostname: 'athena', unit: 'Unit 3', provisionDate: '2026-06-28', lastCheckIn: '2026-07-19 22:08:17 UTC', tooltip: false },
  ]

  async function fetchDevices(useMock = true) {
    loading.value = true
    error.value = null

    try {
      if (useMock) {
        devices.value = mockDevices
        return
      }

      devices.value = await api.get<Device[]>('/devices')
    } catch (e: unknown) {
      if (e instanceof api.ApiError) {
        error.value = `${e.status}: ${e.message}`
      } else {
        error.value = e instanceof Error ? e.message : 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  return { devices, loading, error, fetchDevices }
})
