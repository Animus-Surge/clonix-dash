<template>
  <div class="wrapper">
    <Line id="lineplot"
      :options="options"
      :data="data"
    ></Line>
  </div>
</template>

<!--FIXME: line plot gives errors:

Error: "category" is not a registered scale.
    _get chart.js:5096
    getScale chart.js:5049
    buildOrUpdateScales chart.js:5823
    each helpers.dataset.js:92
    buildOrUpdateScales chart.js:5810
    _updateScales chart.js:5962
    update chart.js:5918
    Chart$1 chart.js:5698
    renderChart index.js:136
    createHook runtime-core.esm-bundler.js:3135
    callWithErrorHandling runtime-core.esm-bundler.js:199
    callWithAsyncErrorHandling runtime-core.esm-bundler.js:206
    __weh runtime-core.esm-bundler.js:3115
    flushPostFlushCbs runtime-core.esm-bundler.js:385
    flushJobs runtime-core.esm-bundler.js:427
vue-router.mjs:1446:12


Uncaught (in promise) Error: "category" is not a registered scale.
    _get chart.js:5096
    getScale chart.js:5049
    buildOrUpdateScales chart.js:5823
    each helpers.dataset.js:92
    buildOrUpdateScales chart.js:5810
    _updateScales chart.js:5962
    update chart.js:5918
    Chart$1 chart.js:5698
    renderChart index.js:136
    createHook runtime-core.esm-bundler.js:3135
    callWithErrorHandling runtime-core.esm-bundler.js:199
    callWithAsyncErrorHandling runtime-core.esm-bundler.js:206
    __weh runtime-core.esm-bundler.js:3115
    flushPostFlushCbs runtime-core.esm-bundler.js:385
    flushJobs runtime-core.esm-bundler.js:427
chart.js:5096:19


-->

<script setup lang="ts">
import { Line } from 'vue-chartjs';

const data = {
  labels: ['-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1', '0'],
  datasets: [
    {
      data: [80, 90, 70, 10, 100, 100, 100, 0, 0, 0, 0]
    }
  ]
}
const options = {
  responsive: true
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