// Current user information (scopes and basic user information)

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCurrentUserStore = defineStore('current-user', () => {
  const user_displayName = ref("")
  const user_unit = ref("")
  const user_subUnit = ref(null)
  const user_loggedIn = ref(false)

  const user_scopes = ref([])

  const getUnit = computed(() => user_subUnit? `${user_unit} - ${user_subUnit}` : user_unit)
  const getHeaderDisplayLabel = computed(() => {
    return `Hello, ${user_displayName}!\n${getUnit.value}`
  })

  return {user_displayName, user_unit, user_subUnit, user_loggedIn, user_scopes, getUnit, getHeaderDisplayLabel}
})