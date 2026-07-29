<template>
  <div class="wrapper">
    <Line id="lineplot"
      :options="options"
      :data="data"
    ></Line>
  </div>
</template>

<!--Plots give errors?

Add:

import 'chart.js/auto'

to the component!-->

<script setup lang="ts">
import 'chart.js/auto'
import { Line } from 'vue-chartjs'

const props = defineProps<{
  title: string,
  xlabels: string[],
  data: any[]
}>()

const data = {
  labels: props.xlabels,
  datasets: [
    {
      data: props.data,
      borderColor: '#006894',
      fill: true
    }
  ]
}
const options = {
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: props.title
    }
  },
  responsive: true,
  // scales: {
  //   xAxis: {
  //     type: 'time'
  //   }
  // }
}
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