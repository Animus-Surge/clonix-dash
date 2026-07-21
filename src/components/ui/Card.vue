<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ props.title }}</span>
      <Icon v-if="props.icon !== ''" :icon="props.icon" />
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue';

const props = defineProps({
  title: String,
  icon: {type: String, default: ""}
})
</script>

<style scoped lang="scss">
.card {
  border-radius: 5px;
  background-color: $color-darkish-secon;

  width: 100%;
  height: fit-content;

  .card-header {
    padding: 5px;
    border-bottom: 1px solid $color-dark-secon;

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
</style>