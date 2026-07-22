<template>
  <div class="wrapper">
    <canvas ref="chart" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Chart, LineController, type ChartOptions } from 'chart.js'
import theme from '@/styles/theme'

const props = defineProps({

})
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;

  canvas {
    max-width: 100%;
  }
}
</style>