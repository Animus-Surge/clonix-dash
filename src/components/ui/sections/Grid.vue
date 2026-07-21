<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  numCols: {type: [Number, String], default: 3}
})
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: 15px;
  
  grid-template-columns: repeat(v-bind(numCols), 1fr);
}
</style>