<template>
  <span class="wrapper" @click="toggleReveal">
    <span v-if="!hidden">{{ value }}</span>
    <span v-else>Click to reveal</span>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  value: string
}>()

const hidden = ref(true)

const toggleReveal = () => {
  hidden.value = !hidden.value
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $color-grayscale-2;
  color: $color-grayscale-d;

  cursor: pointer;

  &:hover {
    background-color: $color-grayscale-3;
  }
}
</style>