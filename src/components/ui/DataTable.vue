<template>
  <table>
    <tr class="table-header">
      <th v-for="label in data.headerLabels">{{ label }}</th>
    </tr>
    <tr v-for="entry in data.entries" @click="handleRowClick(entry)">
      <td v-for="(label, colIndex) in entry" :class="classOverrides[colIndex] !== 'none' ? `font-override-${classOverrides[colIndex]}` : null">
        {{ label }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import type { Dataset } from '@/types'

const props = defineProps<{
    dataset: Dataset, 
    tooltipAlign?: String 
    routeBase?: String
}>()
const router = useRouter()

const data = props.dataset

const classOverrides = props.dataset.fontOverrides

function handleRowClick(entry: String[]) {
  if (props.routeBase == null || data.urlParamSourceCol == null) return
  router.push(`${props.routeBase}/${entry[data.urlParamSourceCol]}`)
}
</script>

<style scoped lang="scss">
.font-override-serif {
  font-family: 'Times New Roman', Times, serif;
}

.font-override-monospace {
  font-family: 'Adwaita Mono', 'Fira Code', 'Consolas', monospace;
}

table {
  width: 100%;
  border-collapse: collapse;
 
  td, th {
    text-align: left;
    padding: 2px;
  }

  tr {
    border-bottom: 1px solid black;

    transition: background 0.15s;

    cursor: pointer;

    &:nth-child(even) {
      background-color: $color-grayscale-8;
    }

    &:hover {
      background-color: $color-hover;
    }
  }
}
</style>