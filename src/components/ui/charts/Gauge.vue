<template>
  <div class="gauge-wrapper">
    <canvas ref="canvas" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Chart, DoughnutController, ArcElement, type ChartOptions } from 'chart.js'
import theme from '@/styles/theme'

Chart.register(DoughnutController, ArcElement)

const props = withDefaults(defineProps<{
  sections: { value: number; color: string }[]
  indicator?: number
  showLabel?: boolean
}>(), {
  indicator: 0,
  showLabel: false,
})

const canvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const needlePlugin = {
  id: 'gaugeNeedle',
  afterDatasetDraw(chart: Chart) {
    if (props.indicator <= 0) return
    const { ctx } = chart
    const meta = chart.getDatasetMeta(0)
    const arc = meta && meta.data[0] as any
    if (!arc) return

    // Use the arc's own computed center — Chart.js auto-fits partial
    // doughnuts within the chart area, so this is not the same as the
    // chartArea's geometric center/bottom.
    const xCenter = arc.x
    const yCenter = arc.y
    const total = props.sections.reduce((sum, s) => sum + s.value, 0)
    const ratio = total > 0 ? props.indicator / total : 0
    const angle = Math.PI + Math.PI * ratio

    const outerRadius = arc.outerRadius
    const needleLen = outerRadius * 0.85

    ctx.save()
    ctx.translate(xCenter, yCenter)
    ctx.rotate(angle)

    ctx.beginPath()
    ctx.moveTo(0, -4)
    ctx.lineTo(needleLen, 0)
    ctx.lineTo(0, 4)
    ctx.closePath()
    ctx.fillStyle = theme.colorGrayscale1
    ctx.fill()

    ctx.beginPath()
    ctx.arc(0, 0, 6, 0, Math.PI * 2)
    ctx.fillStyle = theme.colorGrayscale1
    ctx.fill()

    ctx.restore()
  }
}

const labelPlugin = {
  id: 'gaugeLabel',
  afterDraw(chart: Chart) {
    if (!props.showLabel) return
    const { ctx } = chart
    const meta = chart.getDatasetMeta(0)
    const arc = meta && meta.data[0] as any
    if (!arc) return

    const total = props.sections.reduce((sum, s) => sum + s.value, 0)
    const pct = total > 0 ? Math.round((props.indicator / total) * 100) : 0

    const xCenter = arc.x
    const yCenter = arc.y - 10

    ctx.save()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = `bold 18px ${theme.fontNormal}`
    ctx.fillStyle = theme.colorTextLight
    ctx.fillText(`${pct}%`, xCenter, yCenter)
    ctx.restore()
  }
}

onMounted(() => {
  if (!canvas.value) return

  const total = props.sections.reduce((sum, s) => sum + s.value, 0)

  chart = new Chart(canvas.value, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: props.sections.map(s => s.value),
        backgroundColor: props.sections.map(s => s.color),
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      // A half-doughnut is roughly twice as wide as it is tall (width = 2 *
      // radius, height = radius). Chart.js's default aspect ratio is 1:1
      // (a full circle), which left a big blank strip below the gauge.
      aspectRatio: 2,
      layout: {
        padding: 0,
      },
      cutout: '65%',
      rotation: -90,
      circumference: 180,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    } as ChartOptions<'doughnut'>,
    plugins: [needlePlugin, labelPlugin],
  })
})

watch(() => [props.indicator, props.sections], () => {
  if (!chart) return
  chart.data.datasets[0].data = props.sections.map(s => s.value)
  chart.update()
}, { deep: true })
</script>

<style scoped lang="scss">
.gauge-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;

  canvas {
    max-width: 100%;
  }
}
</style>
