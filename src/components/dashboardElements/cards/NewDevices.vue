<template>
  <Card icon="pc-display" title="New Devices">
    <Table :dataset="testTableData" routeBase="/devices" />
    <Button class="card-button" href="/devices">See All</Button>
  </Card>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue'
import Table from '@/components/ui/DataTable.vue';

const testTableData = {
  headerLabels: ['Serial Number', 'Hostname', 'Unit'],
  fontOverrides: ['monospace', 'monospace', 'none'],
  urlParamSourceCol: 0,
  entries: [
    ['JK7F9R3', 'zeus.example.adp.net', 'Unit 1'],
    ['PF-3K4M2X', 'poseidon.example.adp.net', 'Unit 2'],
    ['H7G2K4T', 'athena.example.adp.net', 'Unit 3'],
    ['PF-AB12CD', 'apollo.example.adp.net', 'Unit 4'],
    ['M3N5P7Q', 'hermes.example.adp.net', 'Unit 1'],
  ]
}
</script>

<style scoped lang="scss">
.card-button {
  width: 30%;
}
</style>