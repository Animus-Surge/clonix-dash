<template>
  <table>
    <tr class="table-header">
      <td v-for="label in header">{{label}}</td>      
    </tr>
    <tr v-for="entry in entries" @click="onClick(entry)">
      <td v-for="label in entry">{{label}}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
// TODO: allow sorting

const props = defineProps<{
  tableId: string
  header: string[]
  entries: any[][]
  clickAction?: Function
}>()

const onClick = (entry: string[]) => {
  if (props.clickAction) {
    props.clickAction(entry)
  }
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