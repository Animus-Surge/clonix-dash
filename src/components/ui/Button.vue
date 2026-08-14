<template>
  <button :disabled="disabled" class="button"><slot/></button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
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

  transition: background $transition-color, color $transition-color;

  background-color: $color-tert;
  color: $color-text-dark;

  &:disabled {
    background-color: $color-grayscale-8 !important;
    color: $color-grayscale-5 !important;
    cursor: initial;
  }

  &:hover {
    background-color: $color-hover;
    color: $color-text-hover;
  }

}
</style>