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
          <span v-if="item.serialNumber.length >= 0" class="inline-code">{{ item.serialNumber }}</span>
          <span v-else>Undefined</span>
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
  { key: 'serialNumber', label: 'Serial Number', sortable: false },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'building', label: 'Building', sortable: true },
  { key: 'room', label: 'Room', sortable: false },
  { key: 'unit', label: 'Unit', sortable: true },
]

const filters = [
  { key: 'unit', label: 'Unit' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'building', label: 'Building' },
]

const data: Device[] = [
{
    uuid: "a8f3d1b2-7e4a-42c9-9e11-8f5c3d2e1a90",
    hostname: "elm",
    type: "Server",
    serialNumber: "7K2M9X3",
    unit: "Technology Services",
    building: "Data Center",
    room: "A-101",
    checkIn: "26/02/14 08:30"
  },
  {
    uuid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    hostname: "oak",
    type: "Server",
    serialNumber: "3J8N1Y4",
    unit: "Technology Services",
    building: "Data Center",
    room: "A-102",
    checkIn: "26/02/15 09:15"
  },
  {
    uuid: "10b2d3e4-f5a6-4123-89b0-c1d2e3f4a5b6",
    hostname: "pine",
    type: "Server",
    serialNumber: "9C4P6W2",
    unit: "School of Medicine",
    building: "Medical Vault",
    room: "B-201",
    checkIn: "26/02/16 11:20"
  },
  {
    uuid: "3c9d8e7f-6a5b-4c3d-2e1f-0a9b8c7d6e5f",
    hostname: "maple",
    type: "Server",
    serialNumber: "5H7R2T8",
    unit: "College of Engineering",
    building: "Engineering Annex",
    room: "104",
    checkIn: "26/02/17 14:02"
  },
  {
    uuid: "7b6a5c4d-3e2f-410a-8b9c-d0e1f2a3b4c5",
    hostname: "birch",
    type: "Server",
    serialNumber: "1D9X4K6",
    unit: "School of Arts",
    building: "Arts Studio Center",
    room: "12",
    checkIn: "26/02/18 16:45"
  },
  {
    uuid: "2a3b4c5d-6e7f-4890-a1b2-c3d4e5f6a7b8",
    hostname: "TSC-8M3L0P5",
    type: "Laptop",
    serialNumber: "8M3L0P5",
    unit: "Technology Services",
    building: "N/A",
    room: "N/A",
    checkIn: "26/02/19 07:55"
  },
  {
    uuid: "9e8d7c6b-5a4f-4321-b0a9-8f7e6d5c4b3a",
    hostname: "MED-2V6Q9Z1",
    type: "Laptop",
    serialNumber: "2V6Q9Z1",
    unit: "School of Medicine",
    building: "N/A",
    room: "N/A",
    checkIn: "26/02/20 10:10"
  },
  {
    uuid: "8c7b6a5f-4e3d-4210-9a8b-7c6d5e4f3a2b",
    hostname: "EGR-6B1N8F4",
    type: "Laptop",
    serialNumber: "6B1N8F4",
    unit: "College of Engineering",
    building: "N/A",
    room: "N/A",
    checkIn: "26/02/21 13:40"
  },
  {
    uuid: "5f4e3d2c-1b0a-4987-8654-3210fedcba98",
    hostname: "CHS-4T5Y7M3",
    type: "Laptop",
    serialNumber: "4T5Y7M3",
    unit: "College of Humanities and Sciences",
    building: "N/A",
    room: "N/A",
    checkIn: "26/02/22 15:05"
  },
  {
    uuid: "d4c3b2a1-0f9e-4876-b543-210987654321",
    hostname: "ART-7X2W0L9",
    type: "Laptop",
    serialNumber: "7X2W0L9",
    unit: "School of Arts",
    building: "N/A",
    room: "N/A",
    checkIn: "26/02/23 09:50"
  },
  {
    uuid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    hostname: "TSC-VM-01",
    type: "VM",
    serialNumber: "",
    unit: "Technology Services",
    building: "elm",
    room: "N/A",
    checkIn: "26/02/24 11:30"
  },
  {
    uuid: "2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e",
    hostname: "MED-VM-02",
    type: "VM",
    serialNumber: "",
    unit: "School of Medicine",
    building: "pine",
    room: "N/A",
    checkIn: "26/02/25 08:15"
  },
  {
    uuid: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    hostname: "EGR-VM-03",
    type: "VM",
    serialNumber: "",
    unit: "College of Engineering",
    building: "maple",
    room: "N/A",
    checkIn: "26/02/26 14:22"
  },
  {
    uuid: "4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a",
    hostname: "CHS-VM-04",
    type: "VM",
    serialNumber: "",
    unit: "College of Humanities and Sciences",
    building: "oak",
    room: "N/A",
    checkIn: "26/02/27 16:00"
  },
  {
    uuid: "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
    hostname: "ART-VM-05",
    type: "VM",
    serialNumber: "",
    unit: "School of Arts",
    building: "birch",
    room: "N/A",
    checkIn: "26/02/28 10:40"
  },
  {
    uuid: "6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c",
    hostname: "TSC-5P9L2M8",
    type: "Desktop",
    serialNumber: "5P9L2M8",
    unit: "Technology Services",
    building: "Tech Tower",
    room: "302",
    checkIn: "26/03/01 08:00"
  },
  {
    uuid: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d",
    hostname: "MED-8X1K4W6",
    type: "Desktop",
    serialNumber: "8X1K4W6",
    unit: "School of Medicine",
    building: "Medical Hall",
    room: "410",
    checkIn: "26/03/02 09:45"
  },
  {
    uuid: "8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e",
    hostname: "EGR-3Z7R9Y1",
    type: "Desktop",
    serialNumber: "3Z7R9Y1",
    unit: "College of Engineering",
    building: "Engineering Quad",
    room: "215",
    checkIn: "26/03/03 11:10"
  },
  {
    uuid: "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
    hostname: "CHS-1M4T6V2",
    type: "Desktop",
    serialNumber: "1M4T6V2",
    unit: "College of Humanities and Sciences",
    building: "Science Center",
    room: "108",
    checkIn: "26/03/04 13:25"
  },
  {
    uuid: "0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a",
    hostname: "ART-9N2B5X8",
    type: "Desktop",
    serialNumber: "9N2B5X8",
    unit: "School of Arts",
    building: "Fine Arts Building",
    room: "201",
    checkIn: "26/03/05 15:50"
  },
  {
    uuid: "e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b",
    hostname: "TSC-2Q7W9K4",
    type: "Unknown",
    serialNumber: "2Q7W9K4",
    unit: "Technology Services",
    building: "Tech Tower",
    room: "Storage",
    checkIn: "26/03/06 08:20"
  },
  {
    uuid: "f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c",
    hostname: "MED-6H4X1M9",
    type: "Laptop",
    serialNumber: "6H4X1M9",
    unit: "School of Medicine",
    building: "N/A",
    room: "N/A",
    checkIn: "26/03/07 10:05"
  },
  {
    uuid: "a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d",
    hostname: "EGR-4Y8R2L5",
    type: "Laptop",
    serialNumber: "4Y8R2L5",
    unit: "College of Engineering",
    building: "N/A",
    room: "N/A",
    checkIn: "26/03/08 12:30"
  },
  {
    uuid: "b4c5d6e7-f89a-0b1c-2d3e-4f5a6b7c8d9e",
    hostname: "CHS-7K3M9P1",
    type: "Unknown",
    serialNumber: "7K3M9P1",
    unit: "College of Humanities and Sciences",
    building: "Science Center",
    room: "Lab B",
    checkIn: "26/03/09 14:15"
  },
  {
    uuid: "c5d6e7f8-9a0b-1c2d-3e4f-5a6b7c8d9e0f",
    hostname: "ART-3J5N8T2",
    type: "Laptop",
    serialNumber: "3J5N8T2",
    unit: "School of Arts",
    building: "N/A",
    room: "N/A",
    checkIn: "26/03/10 16:40"
  },
  {
    uuid: "d6e7f89a-0b1c-2d3e-4f5a-6b7c8d9e0f1a",
    hostname: "TSC-VM-06",
    type: "VM",
    serialNumber: "",
    unit: "Technology Services",
    building: "oak",
    room: "N/A",
    checkIn: "26/03/11 09:10"
  },
  {
    uuid: "e7f89a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
    hostname: "MED-VM-07",
    type: "VM",
    serialNumber: "",
    unit: "School of Medicine",
    building: "pine",
    room: "N/A",
    checkIn: "26/03/11 10:35"
  },
  {
    uuid: "f89a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c",
    hostname: "EGR-8W1X4V7",
    type: "Desktop",
    serialNumber: "8W1X4V7",
    unit: "College of Engineering",
    building: "Engineering Quad",
    room: "305",
    checkIn: "26/03/11 11:50"
  },
  {
    uuid: "0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d",
    hostname: "CHS-6L9P2K3",
    type: "Desktop",
    serialNumber: "6L9P2K3",
    unit: "College of Humanities and Sciences",
    building: "Science Center",
    room: "402",
    checkIn: "26/03/11 13:15"
  },
  {
    uuid: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
    hostname: "ART-4T7M1B9",
    type: "Desktop",
    serialNumber: "4T7M1B9",
    unit: "School of Arts",
    building: "Fine Arts Building",
    room: "110",
    checkIn: "26/03/11 15:00"
  }
]

const entryClick = (item: Device, _index: number) => {
  
}
</script>

<style scoped lang="scss">
</style>
