<template>
  <RouterLink class="button" v-if="props.buttonType === 'link'" :to="props.href"><slot /></RouterLink>
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
  width: 30%;
  align-self: center;
  text-align: center;

  border-radius: 5px;

  transition: background 0.15s;

  background-color: $color-tert-light;
  color: $color-text-regular;

  &:hover {
    background-color: $color-tert-dark;
  }
}
</style>