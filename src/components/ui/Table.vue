<template>
  <table>
    <tr class="table-header">
      <th v-for="label in data.headerLabels">{{ label }}</th>
      <th></th>
    </tr>
    <tr v-for="entry in data.entries" @click="handleRowClick(entry)">
      <td v-for="(label, colIndex) in entry" :class="classOverrides[colIndex] !== 'none' ? `font-override-${classOverrides[colIndex]}` : null">
        <template v-if="colIndex === data.iconColumn">
          <Tooltip v-if="label !== false" :text="label" :align="props.tooltipAlign">
            <Icon icon="exclamation-triangle-fill" class="text-error"/>
          </Tooltip>
        </template>
        <template v-else>{{ label }}</template>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Icon from '@/components/ui/Icon.vue'
import Tooltip from '@/components/ui/Tooltip.vue'

const props = defineProps(['dataset', 'tooltipAlign', 'routeBase'])
const router = useRouter()

const data = props.dataset

const classOverrides = props.dataset.fontOverrides

function handleRowClick(entry: (string | false)[]) {
  if (props.routeBase == null || data.linkColumn == null) return
  router.push(`${props.routeBase}/${entry[data.linkColumn]}`)
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
      background-color: $color-secon;
    }

    &:hover {
      background-color: $color-tert-dark;
    }
  }
}
</style>