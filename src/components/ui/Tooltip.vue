<template>
  <span class="tooltip-wrapper">
    <slot />
    <span :class="['tooltip-bubble', `tooltip-${align}`]">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  align?: 'left' | 'center' | 'right'
}>(), {
  align: 'center'
})
</script>

<style scoped lang="scss">
.tooltip-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.tooltip-bubble {
  position: absolute;
  bottom: calc(100% + 6px);

  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;

  background-color: $color-dark-section;
  color: $color-text-light;
  font-size: 0.75em;

  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;

    border: 4px solid transparent;
    border-top-color: $color-dark-section;
  }
}

.tooltip-left {
  left: 0;

  &::after {
    left: 8px;
  }
}

.tooltip-center {
  left: 50%;
  transform: translateX(-50%);

  &::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

.tooltip-right {
  right: 0;

  &::after {
    right: 8px;
  }
}

.tooltip-wrapper:hover .tooltip-bubble {
  opacity: 1;
}
</style>
