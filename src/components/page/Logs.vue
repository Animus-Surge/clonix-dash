<template>
  <Section>
    <Card icon="hdd-stack" title="All Log Messages">
      <DataTable :dataset="logDataset"></DataTable>
    </Card>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue';

const logDataset = {
  headerLabels: ['Hostname', 'Timestamp', 'Severity', 'Message'],
  fontOverrides: ['monospace', 'monospace', 'monospace', 'none'],
  entries: [
    ['zeus.example.adp.net', '2026-07-15 12:00:00', 'INFO', 'Log message test']
  ]
}
</script>