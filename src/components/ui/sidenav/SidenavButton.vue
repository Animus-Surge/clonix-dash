<template>
  <li>
    <RouterLink :to="href" class="nav-item">
      <Icon v-if="icon" :icon="icon" class="nav-item-icon" />
      <span class="nav-item-label">{{ label }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'

const props = defineProps({
  href: { type: String, required: true },
  label: { type: String, required: true },
  icon: String
})
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: $color-text-light;
  text-decoration: none;
  border-radius: 8px;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background-color: $color-hover !important;
    color: $color-text-hover !important;
  }

  .nav-item-icon {
    font-size: 1.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
  }

  .nav-item-label {
    flex: 1;
    white-space: nowrap;
  }
}

.router-link-active {
  background-color: $color-tert !important;
  color: $color-text-dark !important;
}
</style>