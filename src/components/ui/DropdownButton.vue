<template>
  <button :disabled="disabled" class="button"><slot/> <Icon :icon="'chevron-down'"/></button>
  <div class="dropdown">
    <a v-for="option in options" class="dropdown-link" @click="option.action">{{ option.name }}</a>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue';

interface DropdownAction {
  name: string,
  action: any
}

const props = withDefaults(defineProps<{
  disabled?: boolean
  options: DropdownAction
  }>(),
  {
    disabled: false
  })
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

  &:disabled {
    background-color: $color-grayscale-8 !important;
    cursor: initial;
  }

  &:hover {
    background-color: $color-hover;
    color: $color-text-hover;
  }

}
</style>