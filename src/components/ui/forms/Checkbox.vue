<template>
  <input type="checkbox"
    :checked="isChecked"
    @change="$emit('toggle', id)"
    @click.stop
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  id: any
  isChecked: any
}>()

defineEmits(['toggle'])
</script>

<style scoped lang="scss">
</style>