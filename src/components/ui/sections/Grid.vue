<template>
  <div class="grid" :style="`gap: ${gapOverride}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  numCols: {type: [Number, String], default: 3},
  gapOverride: {type: String, default: '15px'}
})
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  
  grid-template-columns: repeat(v-bind(numCols), 1fr);
}
</style>