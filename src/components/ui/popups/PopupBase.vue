<template>
  <div class="wrapper">
    <Card :title="title" class="popupcard" close-button @close:click="deleteSelf">
      <slot />
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal.js'

const modalStore = useModalStore()

const props = defineProps<{
  id: string,
  title: string
}>()

import Card from '../sections/Card.vue';

const deleteSelf = () => {
  modalStore.remove(props.id)
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #0006;

  overflow: scroll;

  display: flex;
  justify-content: center;

  padding: 50px;

  height: 100%;

  .popupcard {
    width: 800px;
  }
}
</style>