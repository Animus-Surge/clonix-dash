<template>
  <div class="wrapper">
  <button @click="toggleDropdown(false)" :disabled="disabled" :class="['button', dropdownShown?'active':'']"><slot/> <Icon :icon="'chevron-down'"/></button>
  <div v-if="dropdownShown" class="dropdown">
    <a v-for="option in options" class="dropdown-link" @click="optionClick(option.action)">{{ option.name }}</a>
  </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import Icon from './Icon.vue'

interface DropdownAction {
  name: string,
  action: any
}

const dropdownShown = ref(false)

const props = withDefaults(defineProps<{
  disabled?: boolean
  options: DropdownAction
  }>(),
  {
    disabled: false
  }
)

const optionClick = (action: Function) => {
  toggleDropdown(true)
  action()
}

const toggleDropdown = (forceHide: boolean) => {
  if (!forceHide)
    dropdownShown.value = !dropdownShown.value
  else
    dropdownShown.value = false
}
</script>

<style scoped lang="scss">
.button {
  display: block;
  text-decoration: none;
  padding: 8px;
  align-self: center;
  text-align: center;

  border-radius: 5px;
  border: none;

  font-size: 13pt;

  cursor: pointer;

  transition: background 0.15s, color 0.15s;

  background-color: $color-tert;
  color: $color-text-dark;

  &.active {
    background-color: $color-grayscale-c;
  }

  &:disabled {
    background-color: $color-grayscale-8 !important;
    cursor: initial;
  }

  &:hover {
    background-color: $color-hover;
    color: $color-text-hover;
  }

}

.dropdown {
  position: fixed;

  margin-top: 3px;
  width: 200px;

  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  gap: 3px;

  background-color: $color-grayscale-c;


  a {
    padding: 5px;
    cursor: pointer;

    border-radius: 5px;

    transition: background-color $transition-color;

    &:hover {
      background-color: $color-hover;
    }
  }
}
</style>