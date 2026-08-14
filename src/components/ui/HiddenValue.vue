<template>
  <span class="wrapper" @click="toggleReveal" :title="hidden? 'Clock to reveal': ''">
    <span>{{ displayText }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  value: string
}>()

const hidden = ref(true)

const displayText = computed (
  () => {
    if (!hidden.value) return props.value
    return '\u2219'.repeat(props.value.length || 8)
  }
)

const toggleReveal = () => {
  hidden.value = !hidden.value
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $color-grayscale-2;
  color: $color-grayscale-d;

  font-family: $font-mono;

  transition: background-color $transition-color;

  cursor: pointer;

  &:hover {
    background-color: $color-grayscale-5;
  }
}
</style>