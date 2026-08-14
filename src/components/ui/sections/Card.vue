<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ props.title }}</span>
      <a class="close-button" v-if="closeButton" @click="$emit('close:click')">
        <Icon icon="x-lg" />
      </a>
      <Icon v-if="props.icon !== ''" :icon="props.icon" />
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue';

const emits = defineEmits(["close:click"])

const props = withDefaults(defineProps<{
  title: string,
  icon?: string,
  closeButton?: boolean
}>(), {
  icon: "",
  closeButton: false
})
</script>

<style scoped lang="scss">
.card {
  border-radius: 5px;
  background-color: $color-grayscale-a;

  width: 100%;
  height: fit-content;

  .card-header {
    padding: 5px;
    border-bottom: 1px solid $color-dark-section;

    display: flex;
    justify-content: space-between;
  }

  .card-body {
    display: flex;
    flex-direction: column;

    gap: 5px;

    padding: 5px;
  }
}

.close-button {
  font-size: 16pt;
  cursor: pointer;
  transition: color $transition-color;

  &:hover {
    color: blue;
  }
}
</style>