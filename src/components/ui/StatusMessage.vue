<template>
  <div class="status-message">
    <Icon v-if="icon !== ''" :icon="icon" class="status-icon"></Icon>
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/ui/Icon.vue"

const props = defineProps({
  message: String,
  icon: String
})
</script>

<style scoped lang="scss">
.status-message {
  align-self: center;
  text-align: center;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  gap: 3px;

  .status-icon {
    font-size: 20pt;
    width: fit-content;
  }
}
</style>