<template>
  <form>
    <slot/>
    <Button @click="$emit('form:submit')">{{ submitText }}</Button>
  </form>
</template>

<script setup lang="ts">
import Button from '../Button.vue';

const emits = defineEmits(["form:submit"])

const props = withDefaults(defineProps<{submitText?: string}>(), {
  submitText: "Submit"
})
</script>

<style scoped lang="scss">
form {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>