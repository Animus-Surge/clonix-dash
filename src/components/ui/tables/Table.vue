<template>
  <table>
    <tr class="table-header">
      <td v-if="selectable" style="display: flex; align-items: center; padding-left: 5px;">
        <Icon icon="check2-square"></Icon>
      </td>
      <td v-for="label in header">
        {{label}}
        <Icon class="table-header-icon" icon="filter"></Icon>
      </td>
    </tr>
    <tr v-for="entry in entries" @click="onClick(entry)" :class="linked?'linked':''">
      <td v-if="selectable">
        <Checkbox :id="entry[keyIndex]" :is-checked="modelValue?.includes(entry[keyIndex])" @toggle="toggleItem" />
      </td>
      <td v-for="label in entry">{{label}}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import Icon from '../Icon.vue';
import Checkbox from '../forms/Checkbox.vue';
// TODO: allow sorting

const emit = defineEmits(['update:modelValue', 'entry:click'])

const props = withDefaults(defineProps<{
  tableId: string
  header: string[]
  entries: any[][]
  selectable?: boolean
  linked?: boolean
  sortable?: boolean
  keyIndex?: number

  modelValue?: Array<any>
}>(),
  {
    selectable: false,
    linked: false,
    keyIndex: 0
  })

const onClick = (entry: string[]) => {
  emit('entry:click', entry[props.keyIndex])
}

function toggleItem(id: any) {
  if(!props.modelValue) return
  const updatedSelection = [...props.modelValue]
  const index = updatedSelection.indexOf(id)

  if (index === -1) {
    updatedSelection.push(id)
  } else {
    updatedSelection.splice(index, 1)
  }

  emit('update:modelValue', updatedSelection)
}
</script>

<style scoped lang="scss">
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

    &.linked {
      cursor: pointer;
    }
    .table-header {
      cursor: initial;
    }

    &:nth-child(even) {
      background-color: $color-grayscale-8;
    }

    &:hover {
      background-color: $color-hover;
    }
  }
}

.table-header-icon {
  padding: 3px;

  cursor: pointer;

  &:hover {
    color: blue;
  }
}
</style>