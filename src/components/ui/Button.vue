<template>
  <RouterLink v-if="type==='link'" class="button" :to="href"><slot/></RouterLink>
  <a v-else class="button"><slot/></a>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: string
  href?: string
}>(), {
  type: 'link',
  href: ''
})
</script>

<style scoped lang="scss">
.button {
  display: block;
  text-decoration: none;
  padding: 5px;
  align-self: center;
  text-align: center;

  border-radius: 5px;

  cursor: pointer;

  transition: background 0.15s, color 0.15s;

  background-color: $color-tert;
  color: $color-text-dark;

  &:hover {
    background-color: $color-hover;
    color: $color-text-hover;
  }
}
</style>