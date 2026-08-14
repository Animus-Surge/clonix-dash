<template>
  <Section>
    <Card title="Devices" icon="pc-display">
      <DataTable 
        :columns="cols"
        :filters="filters"
        :items="data"
        @row-click="entryClick">
        <template #cell(hostname)="{ item }">
          <span class="inline-code">{{ item.hostname }}</span>
        </template>

        <template #cell(serialNumber)="{ item }">
          <span class="inline-code">{{ item.serialNumber }}</span>
        </template>

        <template #cell(status)="{ item }">
          <span v-if="item.status.toLowerCase() === 'offline'" class="chip chip-error">{{ item.status }}</span>
          <span v-else-if="item.status.toLowerCase() === 'healthy'" class="chip chip-success">{{ item.status }}</span>
          <span v-else-if="item.status.toLowerCase() === 'degraded'" class="chip chip-warning">{{ item.status }}</span>
          <span v-else class="chip chip-info">{{ item.status }}</span>
        </template>
      </DataTable>
    </Card>
  </Section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/sections/Card.vue';
import DataTable from '@/components/ui/tables/DataTable.vue';
import Section from '@/components/ui/sections/Section.vue';
import { Device } from '@/types';

const cols = [
  { key: 'uuid', label: '', hidden: true },
  { key: 'hostname', label: 'Hostname', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'unit', label: 'Unit', sortable: true },
  { key: 'serialNumber', label: 'Serial Number', sortable: false},
  { key: 'checkIn', label: 'Last Check-In', sortable: false},
  { key: 'status', label: 'Status', sortable: true },
]

const filters = [
  { key: 'unit', label: 'Unit' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
]

const data: Device[] = [
  { uuid: '01234567-89ab-cdef-0123456789ab', type: 'Research', hostname: 'chs-7ab1de1', serialNumber: '7ab1de1', unit: 'Humanities and Sciences', provisionDate: '2026-01-01', checkIn: '2026-07-12 00:00', status: 'Offline' },
  { uuid: 'fedcba98-7654-3210-fedcba987654', type: 'Research', hostname: 'egr-w-ex-ab-98', serialNumber: 'abc123d', unit: 'Engineering', provisionDate: '2026-07-03', checkIn: '2026-08-01 00:00', status: 'Healthy' },
  { uuid: 'ab836e9a-aaba-7c6a-742ab17309ff', type: 'Facstaff', hostname: 'N/A', serialNumber: 'N/A', unit: 'Engineering', provisionDate: '2026-01-01', checkIn: '0000-00-00 00:00', status: 'Unknown' },
  { uuid: '01234567-89ab-cdef-0123456789ab', type: 'Desktop', hostname: 'chs-7ab1de1', serialNumber: '7ab1de1', unit: 'Humanities and Sciences', provisionDate: '2026-01-01', checkIn: '2026-07-12 00:00', status: 'Offline' },
  { uuid: '01234567-89ab-cdef-0123456789ab', type: 'VM', hostname: 'chs-7ab1de1', serialNumber: '7ab1de1', unit: 'Humanities and Sciences', provisionDate: '2026-01-01', checkIn: '2026-07-12 00:00', status: 'Offline' },
  { uuid: '72197ab8-99aa-729d-01947abc83fe', type: 'Server', hostname: 'vulpecula', serialNumber: 'USE31416D5', unit: 'Engineering', provisionDate: '2025-05-17', checkIn: '2026-08-13 15:01', status: 'Degraded' },
  { uuid: '01234567-89ab-cdef-0123456789ab', type: 'VM', hostname: 'chs-7ab1de1', serialNumber: '7ab1de1', unit: 'Humanities and Sciences', provisionDate: '2026-01-01', checkIn: '2026-07-12 00:00', status: 'Offline' },
  { uuid: '01234567-89ab-cdef-0123456789ab', type: 'VM', hostname: 'chs-7ab1de1', serialNumber: '7ab1de1', unit: 'Humanities and Sciences', provisionDate: '2026-01-01', checkIn: '2026-07-12 00:00', status: 'Offline' },
]

const entryClick = (item: Device, _index: number) => {
  

}
</script>

<style scoped lang="scss">
</style>