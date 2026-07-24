<template>
  <RouterLink class="button" v-if="props.buttonType === 'link'" :to="props.href"><slot /></RouterLink>
  <a class="button" v-else :href="props.href"><slot /></a>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonType: {type: String, default: 'link'},
  href: {type: String, required: true}
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