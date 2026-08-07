<template>
  <div class="section">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px
}
</style>