<template>
  <i :class='["bi", iconClass]'></i>
</template>

<script setup lang='ts'>
const props = defineProps(['icon'])
const iconClass = "bi-" + props.icon
</script>
