// Modal store

import { defineStore } from "pinia"
import { ref, Component } from 'vue'

type Modal = {
  id: string,
  component: Component
}

export const useModalStore = defineStore('modal-store', () => {
  let modals = ref<Modal[]>([])

  let add = (id: string, component: Component) => {
    modals.value.push({id, component})
  }

  let remove = (id: string) => {
    modals.value = modals.value.filter(modal => modal.id != id)
  }

  return { modals, add, remove }
})