<template>
  <span v-if="showTitle">{{ title }}</span>
  <input :name="name" :type="type" :placeholder="placeholder">
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    showTitle?: boolean
    title?: string
    type?: string
    placeholder?: string
  }>(),
  {
    type: 'text',
    placeholder: "",
    showTitle: false,
    title: ""
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