<template>
  <Card icon="pc-display" title="New Devices">
    <Table :dataset="testTableData" routeBase="/devices" />
    <Button href="/devices">See All</Button>
  </Card>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue'
import Table from '@/components/ui/Table.vue';

const testTableData = {
  headerLabels: ['Serial Number', 'Hostname', 'Unit', 'Provision Date'],
  fontOverrides: ['monospace', 'monospace', 'none', 'none', 'none'],
  iconColumn: 4,
  linkColumn: 0,
  entries: [
    ['JK7F9R3', 'zeus.example.adp.net', 'Unit 1', '2026-07-15', false],
    ['PF-3K4M2X', 'poseidon.example.adp.net', 'Unit 2', '2026-07-10', 'High memory usage'],
    ['H7G2K4T', 'athena.example.adp.net', 'Unit 3', '2026-06-28', false],
    ['PF-AB12CD', 'apollo.example.adp.net', 'Unit 4', '2026-06-15', 'CPU throttling detected'],
    ['M3N5P7Q', 'hermes.example.adp.net', 'Unit 1', '2026-05-30', false],
  ]
}
</script>

<style scoped lang="scss">

</style>