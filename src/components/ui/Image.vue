<template>
  <div class="wrapper">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
  alt: String
})
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 100%;
    width: auto;
    object-fit: contain;
  }
}
</style>