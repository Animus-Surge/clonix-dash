<template>
  <input type="text" :placeholder="placeholder">
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: ""
  }
)
</script>

<style scoped lang="scss">
input {
  border-radius: 5px;
  border: 1px solid black;

  font-size: 13pt;
}
</style>