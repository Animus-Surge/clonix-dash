<template>
  <table>
    <slot />
  </table>
</template>

<script setup lang="ts"></script>

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
</style>