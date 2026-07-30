<template>
  <table>
    <tr class="table-header">
      <th v-for="label in data.headerLabels">{{ label }}</th>
    </tr>
    <tr v-for="entry in data.entries" @click="handleRowClick(entry)">
      <td v-for="label in entry">
        {{ label }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface TableDataset {
  headerLabels: string[]
  entries: any[][]
}

const props = defineProps<{
    clickAction: string
    actionKey: number
    data: TableDataset
}>()
const router = useRouter()

function handleRowClick(entry: String[]) {
  const action = props.clickAction.split(':')
}
</script>

<style scoped lang="scss">
// Font Overrides
.font-override-serif {
  font-family: 'Times New Roman', Times, serif;
}
.font-override-monospace {
  font-family: 'Adwaita Mono', 'Fira Code', 'Consolas', monospace;
}

// Main styles
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