<template>
  <Section>
    <Card title="Logs for zeus.example.adp.net" icon="hdd-stack">
      <DataTable :dataset="logDataset"></DataTable>
    </Card>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/ui/sections/Section.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue';



const logDataset = {
  headerLabels: ['Severity', 'Timestamp', 'Type', 'Message'],
  fontOverrides: ['monospace', 'monospace', 'monospace', 'none'],
  entries: [
    ['INFO', '2026-07-15 12:00:00', 'GENERAL', 'Log message test']
  ]
}
</script>